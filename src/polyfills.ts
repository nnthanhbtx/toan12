/**
 * Polyfills tương thích ngược cho Safari trên iOS 12 – iOS 17 (đặc biệt iPhone 8, iPhone X, iPhone XS Max).
 * Đảm bảo không bị lỗi màn hình trắng do thiếu các API JS mới.
 */

// 1. Promise.withResolvers (Safari 17.4+ mới có — iPhone 8 & iPhone X chỉ lên tối đa iOS 16.7)
if (typeof (Promise as unknown as { withResolvers?: unknown }).withResolvers !== 'function') {
  (Promise as unknown as {
    withResolvers: <T>() => {
      promise: Promise<T>;
      resolve: (value: T | PromiseLike<T>) => void;
      reject: (reason?: unknown) => void;
    };
  }).withResolvers = function <T>() {
    let resolve!: (value: T | PromiseLike<T>) => void;
    let reject!: (reason?: unknown) => void;
    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });
    return { promise, resolve, reject };
  };
}

// 2. URL.canParse & URL.parse (Safari 17+ / 18+ mới có)
if (typeof URL !== 'undefined') {
  const URLAny = URL as unknown as {
    canParse?: (url: string, base?: string) => boolean;
    parse?: (url: string, base?: string) => URL | null;
  };
  if (typeof URLAny.canParse !== 'function') {
    URLAny.canParse = function (url: string, base?: string): boolean {
      try {
        // eslint-disable-next-line no-new
        new URL(url, base);
        return true;
      } catch {
        return false;
      }
    };
  }
  if (typeof URLAny.parse !== 'function') {
    URLAny.parse = function (url: string, base?: string): URL | null {
      try {
        return new URL(url, base);
      } catch {
        return null;
      }
    };
  }
}

// 3. Object.hasOwn (Safari 15.4+)
if (typeof (Object as unknown as { hasOwn?: unknown }).hasOwn !== 'function') {
  (Object as unknown as { hasOwn: (obj: object, prop: PropertyKey) => boolean }).hasOwn = function (
    obj: object,
    prop: PropertyKey
  ): boolean {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
}

// 4. Array.prototype.at & String.prototype.at (Safari 15.4+)
if (typeof (Array.prototype as unknown as { at?: unknown }).at !== 'function') {
  Object.defineProperty(Array.prototype, 'at', {
    value: function <T>(this: T[], n: number): T | undefined {
      const len = this.length;
      const k = Math.trunc(n) || 0;
      const idx = k >= 0 ? k : len + k;
      if (idx < 0 || idx >= len) return undefined;
      return this[idx];
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

if (typeof (String.prototype as unknown as { at?: unknown }).at !== 'function') {
  Object.defineProperty(String.prototype, 'at', {
    value: function (this: string, n: number): string | undefined {
      const len = this.length;
      const k = Math.trunc(n) || 0;
      const idx = k >= 0 ? k : len + k;
      if (idx < 0 || idx >= len) return undefined;
      return this.charAt(idx);
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

// 5. Array.prototype.findLast / toSorted / toReversed (Safari 15.4–16+)
if (typeof (Array.prototype as unknown as { findLast?: unknown }).findLast !== 'function') {
  Object.defineProperty(Array.prototype, 'findLast', {
    value: function <T>(
      this: T[],
      predicate: (value: T, index: number, obj: T[]) => boolean,
      thisArg?: unknown
    ): T | undefined {
      for (let i = this.length - 1; i >= 0; i--) {
        if (predicate.call(thisArg, this[i], i, this)) {
          return this[i];
        }
      }
      return undefined;
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

if (typeof (Array.prototype as unknown as { toSorted?: unknown }).toSorted !== 'function') {
  Object.defineProperty(Array.prototype, 'toSorted', {
    value: function <T>(this: T[], compareFn?: (a: T, b: T) => number): T[] {
      return [...this].sort(compareFn);
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

if (typeof (Array.prototype as unknown as { toReversed?: unknown }).toReversed !== 'function') {
  Object.defineProperty(Array.prototype, 'toReversed', {
    value: function <T>(this: T[]): T[] {
      return [...this].reverse();
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

// 6. String.prototype.replaceAll (Safari 13.1+)
if (typeof String.prototype.replaceAll !== 'function') {
  Object.defineProperty(String.prototype, 'replaceAll', {
    value: function (this: string, search: string | RegExp, replace: string | ((...args: unknown[]) => string)): string {
      if (search instanceof RegExp) {
        if (!search.global) {
          throw new TypeError('replaceAll must be called with a global RegExp');
        }
        return this.replace(search, replace as string);
      }
      return this.split(search).join(typeof replace === 'function' ? replace(search) : replace);
    },
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

// 7. structuredClone fallback (Safari 15.4+)
if (typeof (globalThis as unknown as { structuredClone?: unknown }).structuredClone !== 'function') {
  (globalThis as unknown as { structuredClone: <T>(val: T) => T }).structuredClone = function <T>(val: T): T {
    return JSON.parse(JSON.stringify(val)) as T;
  };
}
