export interface Question {
  id: number;
  question: string;
  answer: string;
  category: Category;
  difficulty: "easy" | "medium" | "hard";
}

export type Category =
  | "JavaScript"
  | "CSS & HTML"
  | "React"
  | "TypeScript"
  | "Performance"
  | "Browser & Web APIs"
  | "Architecture"
  | "Testing";

export const categories: Category[] = [
  "JavaScript",
  "CSS & HTML",
  "React",
  "TypeScript",
  "Performance",
  "Browser & Web APIs",
  "Architecture",
  "Testing",
];

export const questions: Question[] = [
  // ── JavaScript ──────────────────────────────────────────────
  {
    id: 1,
    question: "What is the difference between `var`, `let`, and `const`?",
    answer:
      "`var` is function-scoped and hoisted (initialized as `undefined`). `let` and `const` are block-scoped and hoisted but not initialized (temporal dead zone). `const` cannot be reassigned after declaration, though object/array contents can still be mutated. Prefer `const` by default, `let` when reassignment is needed, and avoid `var` in modern code.",
    category: "JavaScript",
    difficulty: "easy",
  },
  {
    id: 2,
    question: "Explain closures in JavaScript. Give a practical example.",
    answer:
      "A closure is a function that retains access to variables from its enclosing lexical scope, even after the outer function has returned. Every function in JavaScript forms a closure. Practical example: a counter factory — `function makeCounter() { let count = 0; return () => ++count; }`. The returned function \"closes over\" `count`. Closures are used in data privacy, partial application, event handlers, and module patterns.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: 3,
    question: "How does the JavaScript event loop work?",
    answer:
      "JavaScript is single-threaded with a concurrency model based on an event loop. The call stack executes synchronous code. When async operations (setTimeout, fetch, DOM events) complete, their callbacks are placed in task queues. The event loop checks: (1) execute all synchronous code on the call stack, (2) drain the microtask queue (Promises, queueMicrotask, MutationObserver), (3) pick one task from the macrotask queue (setTimeout, setInterval, I/O). Microtasks always run before the next macrotask. requestAnimationFrame callbacks run before the next repaint.",
    category: "JavaScript",
    difficulty: "hard",
  },
  {
    id: 4,
    question: "What is the difference between `==` and `===`?",
    answer:
      "`==` performs type coercion before comparison — it converts operands to the same type. `===` is strict equality with no coercion; both value and type must match. Examples: `0 == ''` is `true` (both coerce to 0), but `0 === ''` is `false`. Always use `===` to avoid unexpected coercion bugs. The only common exception is `x == null` which checks for both `null` and `undefined`.",
    category: "JavaScript",
    difficulty: "easy",
  },
  {
    id: 5,
    question: "Explain prototypal inheritance in JavaScript.",
    answer:
      "Every JavaScript object has an internal `[[Prototype]]` link to another object. When you access a property, the engine walks up the prototype chain until it finds the property or reaches `null`. Constructor functions set up prototypes via `Constructor.prototype`. `class` syntax is syntactic sugar over this mechanism. `Object.create(proto)` creates objects with a specific prototype. Key difference from classical inheritance: objects inherit directly from other objects, not from classes. The chain is dynamic — changes to a prototype affect all objects linked to it.",
    category: "JavaScript",
    difficulty: "hard",
  },
  {
    id: 6,
    question: "What are Promises? How do `async/await` relate to them?",
    answer:
      "A Promise represents a value that may be available now, in the future, or never. It has three states: pending, fulfilled, or rejected. You chain `.then()` for success and `.catch()` for errors. `async/await` is syntactic sugar over Promises — an `async` function always returns a Promise, and `await` pauses execution until the Promise settles. This makes asynchronous code read like synchronous code. Error handling uses try/catch instead of `.catch()`. Under the hood, `await` schedules the continuation as a microtask.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: 7,
    question: "What is the `this` keyword in JavaScript? How does its value get determined?",
    answer:
      "`this` depends on how a function is called, not where it's defined. Rules (in priority order): (1) `new` binding — `this` is the newly created object. (2) Explicit binding — `call`, `apply`, `bind` set `this` explicitly. (3) Implicit binding — the object before the dot (`obj.fn()` → `this` is `obj`). (4) Default binding — in strict mode `undefined`, otherwise `globalThis`. Arrow functions don't have their own `this` — they inherit from the enclosing lexical scope, making them ideal for callbacks and event handlers.",
    category: "JavaScript",
    difficulty: "medium",
  },
  {
    id: 8,
    question: "What is event delegation and why is it useful?",
    answer:
      "Event delegation leverages event bubbling by attaching a single event listener to a parent element instead of individual listeners on each child. When an event fires on a child, it bubbles up to the parent where you check `event.target` to determine which child was clicked. Benefits: (1) fewer event listeners means less memory, (2) dynamically added children are automatically handled, (3) simpler cleanup. Example: one click handler on a `<ul>` instead of one on each `<li>`. Use `event.target.closest('.selector')` for reliable target matching.",
    category: "JavaScript",
    difficulty: "medium",
  },
  // ── CSS & HTML ──────────────────────────────────────────────
  {
    id: 9,
    question: "Explain the CSS Box Model.",
    answer:
      "Every element is a rectangular box with four layers from inside out: content (the actual text/images), padding (space between content and border), border (the visible edge), and margin (space outside the border separating elements from neighbors). By default (`box-sizing: content-box`), width/height apply only to the content area. With `box-sizing: border-box`, width/height include padding and border, making layout calculations more predictable. Margins collapse vertically between adjacent block elements — the larger margin wins.",
    category: "CSS & HTML",
    difficulty: "easy",
  },
  {
    id: 10,
    question: "What is the difference between Flexbox and CSS Grid? When would you use each?",
    answer:
      "Flexbox is one-dimensional — it handles layout in a single axis (row or column). Grid is two-dimensional — it handles rows and columns simultaneously. Use Flexbox for: navigation bars, aligning items in a row, distributing space in one direction, centering content. Use Grid for: page layouts, card grids, any layout where you need control over both axes, overlapping elements with `grid-area`. They complement each other — Grid for the page macro layout, Flexbox for component-level alignment within grid cells.",
    category: "CSS & HTML",
    difficulty: "easy",
  },
  {
    id: 11,
    question: "What is CSS specificity and how is it calculated?",
    answer:
      "Specificity determines which CSS rule applies when multiple rules target the same element. It's calculated as a tuple (a, b, c): (a) inline styles, (b) ID selectors, (c) class selectors, attributes, and pseudo-classes. Type selectors and pseudo-elements count separately but with lower weight. `!important` overrides all specificity (avoid it). Example: `#nav .link` has specificity (0,1,1) which beats `.nav .link.active` at (0,0,3) because IDs outweigh any number of classes. When specificity ties, the last rule in source order wins.",
    category: "CSS & HTML",
    difficulty: "medium",
  },
  {
    id: 12,
    question: "What are semantic HTML elements and why do they matter?",
    answer:
      "Semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) convey meaning about the content's purpose, unlike generic `<div>` and `<span>`. They matter for: (1) Accessibility — screen readers use semantic landmarks for navigation. (2) SEO — search engines understand content structure. (3) Maintainability — code is self-documenting. (4) Default behaviors — `<button>` handles keyboard events and focus, `<form>` handles submission. Using a `<div>` with click handlers instead of `<button>` is a common anti-pattern that breaks accessibility.",
    category: "CSS & HTML",
    difficulty: "easy",
  },
  {
    id: 13,
    question: "Explain the `position` property values in CSS and when to use each.",
    answer:
      "`static`: default, follows normal document flow. `relative`: positioned relative to its normal position; creates a positioning context for absolutely positioned children. `absolute`: removed from flow, positioned relative to the nearest positioned ancestor (not `static`). `fixed`: removed from flow, positioned relative to the viewport — stays in place during scroll. `sticky`: behaves like `relative` until a scroll threshold is reached, then behaves like `fixed` within its container. Common use cases: `sticky` for headers, `absolute` for tooltips/dropdowns, `fixed` for modals/FABs.",
    category: "CSS & HTML",
    difficulty: "easy",
  },
  {
    id: 14,
    question: "What is the critical rendering path?",
    answer:
      "The critical rendering path is the sequence of steps the browser takes to convert HTML, CSS, and JavaScript into pixels on screen: (1) Parse HTML → build DOM tree. (2) Parse CSS → build CSSOM tree. (3) Combine DOM + CSSOM → Render tree (only visible elements). (4) Layout — calculate geometry (position, size) for each element. (5) Paint — fill pixels for each element (colors, borders, shadows). (6) Composite — combine painted layers in correct order. CSS blocks rendering (render-blocking), JS blocks HTML parsing (parser-blocking) unless `async` or `defer`. Optimizing the CRP means reducing the resources on this path.",
    category: "CSS & HTML",
    difficulty: "hard",
  },
  {
    id: 15,
    question: "What are CSS Custom Properties (CSS Variables) and how do they differ from preprocessor variables?",
    answer:
      "CSS Custom Properties (`--my-color: blue`) are native to the browser and cascade like other CSS properties. They can be scoped to any selector, inherited by children, and changed at runtime via JavaScript (`element.style.setProperty('--my-color', 'red')`). Preprocessor variables (Sass `$my-color`) are compiled away at build time — they don't exist in the browser. Key differences: CSS variables are dynamic (can change based on media queries, classes, or JS), cascade, and are available in DevTools. Preprocessor variables enable loops, mixins, and compile-time computation. Modern approach: use CSS variables for theming and runtime values, preprocessor for build-time utilities.",
    category: "CSS & HTML",
    difficulty: "medium",
  },
  {
    id: 16,
    question: "How do you make a website accessible? Name key practices.",
    answer:
      "Key accessibility practices: (1) Use semantic HTML (`<button>`, `<nav>`, `<main>`) instead of generic `<div>`. (2) Provide alt text for images. (3) Ensure keyboard navigation — all interactive elements must be focusable and operable. (4) Maintain sufficient color contrast (WCAG AA: 4.5:1 for text). (5) Use ARIA attributes only when HTML semantics are insufficient. (6) Label form inputs with `<label>`. (7) Manage focus for dynamic content (modals, SPAs). (8) Support screen reader announcements with `aria-live` regions. (9) Test with screen readers (VoiceOver, NVDA) and automated tools (axe, Lighthouse).",
    category: "CSS & HTML",
    difficulty: "medium",
  },
  // ── React ───────────────────────────────────────────────────
  {
    id: 17,
    question: "What is the Virtual DOM and how does React use it?",
    answer:
      "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes, React creates a new virtual DOM tree, diffs it against the previous one (reconciliation), and calculates the minimal set of actual DOM operations needed. This is faster than directly manipulating the DOM for most use cases because: (1) batch updates reduce reflows, (2) the diff algorithm is O(n) using heuristics (same type = update, different type = replace, keys for list optimization). React 18+ uses concurrent rendering to split work into chunks, yielding to the browser between frames.",
    category: "React",
    difficulty: "medium",
  },
  {
    id: 18,
    question: "Explain the difference between `useState` and `useReducer`. When would you choose one over the other?",
    answer:
      "`useState` is for simple, independent pieces of state. `useReducer` is for complex state logic where the next state depends on the previous state, or when multiple state values are related. `useReducer` takes a reducer function `(state, action) => newState` and returns `[state, dispatch]`. Choose `useReducer` when: (1) state transitions are complex (multiple sub-values), (2) you want to centralize state logic, (3) actions need to be dispatched from deep in the tree (pass `dispatch` instead of multiple callbacks). `useState` is simpler for booleans, strings, and independent values.",
    category: "React",
    difficulty: "medium",
  },
  {
    id: 19,
    question: "What are React keys and why are they important?",
    answer:
      "Keys help React identify which items in a list have changed, been added, or removed. Without keys (or with index-based keys), React uses position to match elements — this leads to bugs when items are reordered, deleted, or inserted (stale state, wrong component reuse). Good keys are stable, unique, and predictable — typically database IDs. Index-based keys are only safe for static, never-reordered lists. When a key changes, React destroys the old component and mounts a new one — this is a useful trick to reset component state.",
    category: "React",
    difficulty: "easy",
  },
  {
    id: 20,
    question: "What is `useEffect` and what are its common pitfalls?",
    answer:
      "`useEffect` runs side effects after render. It takes a callback and an optional dependency array. With no array, it runs after every render. With `[]`, it runs once on mount. With `[dep]`, it runs when `dep` changes. Common pitfalls: (1) Missing dependencies — leads to stale closures. (2) Over-fetching — not cleaning up or deduplicating API calls. (3) Infinite loops — when the effect updates a value in its own dependency array. (4) Not returning a cleanup function for subscriptions/timers/listeners. (5) Using effects for derived state — use `useMemo` or compute during render instead. React 18 strict mode runs effects twice in development to catch cleanup bugs.",
    category: "React",
    difficulty: "medium",
  },
  {
    id: 21,
    question: "When should you use `useMemo` and `useCallback`? When should you NOT?",
    answer:
      "`useMemo` memoizes a computed value; `useCallback` memoizes a function reference. Use them when: (1) passing callbacks to optimized children wrapped in `React.memo`, (2) expensive computations that shouldn't rerun on every render, (3) values used as dependencies in other hooks. Don't use them for: (1) every value — memoization has its own cost (memory, comparison overhead), (2) simple computations that are faster to re-run than to cache, (3) premature optimization without measuring. Profile first with React DevTools. Most re-renders are cheap — only optimize when you've identified an actual bottleneck.",
    category: "React",
    difficulty: "medium",
  },
  {
    id: 22,
    question: "What are React Server Components (RSC) and how do they differ from SSR?",
    answer:
      "Server Components run exclusively on the server and send rendered UI (not JavaScript) to the client — they have zero bundle size impact. SSR renders components to HTML on the server but still ships the full component JavaScript for hydration. Key differences: (1) RSC components never re-render on the client, (2) they can directly access databases, file systems, and server-only APIs, (3) they can't use hooks (`useState`, `useEffect`) or browser APIs. In Next.js App Router, components are Server Components by default. Add `'use client'` to opt into Client Components for interactivity. The two types compose together — a Server Component can render Client Components as children.",
    category: "React",
    difficulty: "hard",
  },
  {
    id: 23,
    question: "What is prop drilling and how do you avoid it?",
    answer:
      "Prop drilling is passing data through multiple component layers that don't need the data themselves, just to reach a deeply nested component. Solutions: (1) React Context — provides values to any descendant without explicit passing. Best for infrequently changing data (theme, auth, locale). (2) Component composition — restructure so the parent renders the deeply nested component directly, passing props without intermediate layers. (3) State management libraries (Zustand, Redux) for complex shared state. (4) Custom hooks that encapsulate context consumption. Avoid over-using Context for frequently changing data (it re-renders all consumers on every change).",
    category: "React",
    difficulty: "easy",
  },
  {
    id: 24,
    question: "How do Error Boundaries work in React?",
    answer:
      "Error Boundaries are class components that catch JavaScript errors in their child component tree during rendering, lifecycle methods, and constructors. They use `static getDerivedStateFromError()` to update state (show fallback UI) and `componentDidCatch()` for logging. They do NOT catch errors in: event handlers, async code, SSR, or the error boundary itself. In practice, wrap sections of your app to isolate crashes — a broken sidebar shouldn't take down the whole page. There's no hook equivalent yet. Libraries like `react-error-boundary` provide a more ergonomic API with retry and reset capabilities.",
    category: "React",
    difficulty: "medium",
  },
  {
    id: 25,
    question: "Explain React's reconciliation algorithm.",
    answer:
      "Reconciliation is how React diffs the old and new virtual DOM trees to determine minimal DOM updates. Key heuristics: (1) Elements of different types produce different trees — React unmounts the old tree and builds a new one. (2) Elements of the same type — React keeps the DOM node and updates only changed attributes. (3) Component elements of the same type — React updates props and re-renders. (4) Lists use `key` to match children across renders — stable keys enable React to reorder rather than recreate. The algorithm is O(n) rather than the O(n³) optimal tree diff because of these heuristics. React Fiber (since React 16) made reconciliation interruptible for concurrent rendering.",
    category: "React",
    difficulty: "hard",
  },
  {
    id: 26,
    question: "What is React.memo and when should you use it?",
    answer:
      "`React.memo` is a higher-order component that memoizes a function component — it skips re-rendering if props haven't changed (shallow comparison). Use it when: (1) a component renders the same output for the same props, (2) the component is expensive to render, (3) the parent re-renders frequently but the child's props rarely change. Don't use it for: components that almost always receive new props (wasted comparison), cheap components, or components where the parent is already optimized. Pair with `useCallback` for function props and `useMemo` for object/array props to avoid breaking the shallow comparison.",
    category: "React",
    difficulty: "medium",
  },
  // ── TypeScript ──────────────────────────────────────────────
  {
    id: 27,
    question: "What is the difference between `interface` and `type` in TypeScript?",
    answer:
      "Both define object shapes, but they differ in capability. Interfaces: can be extended with `extends`, support declaration merging (adding properties across multiple declarations), and are the traditional choice for object shapes. Types: can represent unions (`A | B`), intersections (`A & B`), primitives, tuples, mapped types, and conditional types — they're more versatile. In practice, use interfaces for public API contracts and object shapes (they produce clearer error messages and support merging for library consumers). Use types for unions, complex type transformations, and utility types. They're largely interchangeable for simple object shapes.",
    category: "TypeScript",
    difficulty: "easy",
  },
  {
    id: 28,
    question: "Explain generics in TypeScript with an example.",
    answer:
      "Generics let you write functions, classes, and types that work with multiple types while maintaining type safety. Instead of using `any`, you define a type parameter: `function identity<T>(arg: T): T { return arg; }`. The caller decides the type: `identity<string>('hello')` or TypeScript infers it: `identity(42)` → `T` is `number`. Practical examples: `Array<T>`, `Promise<T>`, `useState<T>`. Constraints limit what types are accepted: `function getLength<T extends { length: number }>(arg: T)`. Generics enable type-safe utility functions, reusable components, and collections without losing type information.",
    category: "TypeScript",
    difficulty: "medium",
  },
  {
    id: 29,
    question: "What are utility types in TypeScript? Name five and explain their use.",
    answer:
      "`Partial<T>` — makes all properties optional. Useful for update functions: `updateUser(id, changes: Partial<User>)`. `Required<T>` — makes all properties required; the inverse of Partial. `Pick<T, K>` — selects a subset of properties: `Pick<User, 'name' | 'email'>`. `Omit<T, K>` — excludes properties: `Omit<User, 'password'>` for a public user type. `Record<K, V>` — creates an object type with keys of type K and values of type V: `Record<string, number>` for a dictionary. Others worth knowing: `Readonly<T>`, `ReturnType<T>`, `Parameters<T>`, `Exclude<T, U>`, `Extract<T, U>`, `NonNullable<T>`.",
    category: "TypeScript",
    difficulty: "medium",
  },
  {
    id: 30,
    question: "What is type narrowing in TypeScript?",
    answer:
      "Type narrowing is when TypeScript refines a broad type to a more specific one based on control flow analysis. Techniques: (1) `typeof` checks: `if (typeof x === 'string')`. (2) `instanceof`: `if (x instanceof Date)`. (3) Truthiness: `if (x)` narrows away `null | undefined`. (4) `in` operator: `if ('name' in obj)`. (5) Discriminated unions: a shared literal property (`type: 'circle' | 'square'`) lets TypeScript narrow in switch/if. (6) Custom type guards: `function isString(x: unknown): x is string`. Narrowing eliminates type errors and avoids unnecessary type assertions (`as`), making code safer.",
    category: "TypeScript",
    difficulty: "medium",
  },
  {
    id: 31,
    question: "What is the `unknown` type and how does it differ from `any`?",
    answer:
      "`any` disables type checking entirely — you can do anything with it, which defeats the purpose of TypeScript. `unknown` is the type-safe counterpart: it accepts any value (like `any`), but you can't do anything with it until you narrow the type. Example: `function process(input: unknown) { if (typeof input === 'string') { input.toUpperCase(); } }`. Use `unknown` for values whose type you genuinely don't know (API responses, user input, JSON.parse results) and narrow before use. Use `any` only as a last resort during migration. `unknown` is the top type; `never` is the bottom type.",
    category: "TypeScript",
    difficulty: "medium",
  },
  {
    id: 32,
    question: "How do you type React component props in TypeScript?",
    answer:
      "Define an interface or type for props: `interface ButtonProps { label: string; onClick: () => void; disabled?: boolean; children?: React.ReactNode; }`. Apply it to the component: `function Button({ label, onClick, disabled }: ButtonProps) { ... }`. For event handlers: `onClick: (e: React.MouseEvent<HTMLButtonElement>) => void`. For components that accept all HTML attributes: `interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant: 'primary' | 'secondary'; }`. For children: use `React.ReactNode` (most permissive) or `React.ReactElement` (JSX only). For refs: use `React.forwardRef<HTMLDivElement, Props>`.",
    category: "TypeScript",
    difficulty: "easy",
  },
  // ── Performance ─────────────────────────────────────────────
  {
    id: 33,
    question: "What are Core Web Vitals and why do they matter?",
    answer:
      "Core Web Vitals are three metrics Google uses to measure user experience: (1) **LCP (Largest Contentful Paint)** — time until the largest visible element renders. Target: < 2.5s. (2) **INP (Interaction to Next Paint)** — responsiveness to user interactions. Target: < 200ms. Replaced FID in 2024. (3) **CLS (Cumulative Layout Shift)** — visual stability; how much content shifts unexpectedly. Target: < 0.1. They matter because: Google uses them as ranking signals, they correlate with user engagement and conversion rates, and they provide a shared vocabulary for performance discussions. Measure with Lighthouse, PageSpeed Insights, Chrome UX Report, or `web-vitals` library in production.",
    category: "Performance",
    difficulty: "medium",
  },
  {
    id: 34,
    question: "What is code splitting and how do you implement it in React?",
    answer:
      "Code splitting breaks your JavaScript bundle into smaller chunks loaded on demand, reducing the initial bundle size. Implementation: (1) `React.lazy(() => import('./Component'))` with `<Suspense fallback={...}>` for component-level splitting. (2) Route-based splitting — each route loads its own chunk (Next.js does this automatically). (3) `import()` for loading libraries on demand (e.g., load a charting library only when the user visits the analytics page). Webpack/Vite automatically create separate chunks at `import()` boundaries. Analyze bundle size with `webpack-bundle-analyzer` or `source-map-explorer`. Avoid over-splitting — too many small chunks cause network waterfall overhead.",
    category: "Performance",
    difficulty: "medium",
  },
  {
    id: 35,
    question: "What causes layout thrashing and how do you avoid it?",
    answer:
      "Layout thrashing occurs when JavaScript repeatedly reads layout properties (offsetHeight, getBoundingClientRect) and writes style changes in alternation, forcing the browser to recalculate layout on each read. Example: reading `el.offsetHeight` inside a loop that also modifies `el.style.height`. Each read forces a synchronous reflow. Solution: batch all reads first, then batch all writes. Use `requestAnimationFrame` to defer writes to the next frame. Libraries like FastDOM automate read/write batching. CSS `contain: layout` can limit the scope of reflows. Virtual DOM frameworks (React) largely avoid this by batching DOM updates.",
    category: "Performance",
    difficulty: "hard",
  },
  {
    id: 36,
    question: "How does lazy loading work and what are its trade-offs?",
    answer:
      "Lazy loading defers loading resources until they're needed. For images: `<img loading='lazy'>` or Intersection Observer to load images as they enter the viewport. For components: `React.lazy` + dynamic `import()`. For routes: split code per route. Trade-offs: Pros — faster initial load, reduced bandwidth, better Time-to-Interactive. Cons — content may flash or shift as it loads (CLS impact), users on slow connections see loading states, search engines may miss lazy-loaded content, above-the-fold images should NOT be lazy-loaded (hurts LCP). Preloading hints (`<link rel='preload'>`) and priority hints (`fetchpriority='high'`) complement lazy loading by prioritizing critical resources.",
    category: "Performance",
    difficulty: "medium",
  },
  {
    id: 37,
    question: "What is debouncing vs throttling? When would you use each?",
    answer:
      "Both limit how often a function executes. **Debounce**: waits until the user stops triggering the event for a specified delay, then fires once. Use for: search input (wait until typing stops), window resize handler, form validation. **Throttle**: fires at most once per specified interval, regardless of how many times the event fires. Use for: scroll handlers, mousemove tracking, rate-limiting API calls, game loop updates. Implementation: debounce resets the timer on each call; throttle ignores calls until the interval passes. Lodash provides both. In React, consider `useDeferredValue` as a built-in alternative for render-triggered deferral.",
    category: "Performance",
    difficulty: "easy",
  },
  {
    id: 38,
    question: "How do you detect and fix memory leaks in a frontend application?",
    answer:
      "Common causes: (1) event listeners not removed on unmount, (2) setInterval/setTimeout not cleared, (3) closures holding references to detached DOM nodes, (4) growing arrays/maps that are never pruned, (5) unsubscribed WebSocket/observable connections. Detection: Chrome DevTools Memory tab — take heap snapshots before and after actions, compare for objects that shouldn't be retained. The Allocation Timeline shows when memory is allocated. Performance Monitor shows real-time JS heap size. In React, missing cleanup in `useEffect` is the most common cause. Fix: always return cleanup functions, use `AbortController` for fetch, and use weak references (`WeakMap`, `WeakRef`) where appropriate.",
    category: "Performance",
    difficulty: "hard",
  },
  // ── Browser & Web APIs ──────────────────────────────────────
  {
    id: 39,
    question: "Explain the difference between `localStorage`, `sessionStorage`, and cookies.",
    answer:
      "`localStorage`: persists until explicitly cleared, ~5-10MB, same-origin only, not sent with HTTP requests. Good for user preferences, cached data. `sessionStorage`: same API as localStorage but scoped to the browser tab — cleared when the tab closes. Good for form data, temporary state. `cookies`: sent with every HTTP request to the matching domain, can be set by server (`Set-Cookie`), support expiration, `HttpOnly` (no JS access), `Secure` (HTTPS only), `SameSite` (CSRF protection). Max ~4KB per cookie. Use cookies for auth tokens (HttpOnly + Secure), localStorage for non-sensitive data, sessionStorage for tab-specific ephemeral data.",
    category: "Browser & Web APIs",
    difficulty: "easy",
  },
  {
    id: 40,
    question: "What is CORS and how does it work?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security mechanism that controls which origins can access resources on a server. Same-origin policy blocks cross-origin requests by default. CORS relaxes this via HTTP headers. Simple requests (GET, POST with basic headers) get a direct response with `Access-Control-Allow-Origin`. Complex requests (PUT, DELETE, custom headers) trigger a preflight OPTIONS request first — the server must respond with allowed methods, headers, and origins. Common issues: missing `Access-Control-Allow-Origin`, forgetting to handle preflight, credentials mode requiring `Access-Control-Allow-Credentials: true` (and origin can't be `*`). The server controls CORS, not the frontend.",
    category: "Browser & Web APIs",
    difficulty: "medium",
  },
  {
    id: 41,
    question: "What are Web Workers and when would you use them?",
    answer:
      "Web Workers run JavaScript in a background thread, separate from the main UI thread. They can't access the DOM but can perform CPU-intensive tasks without blocking user interactions. Communication happens via `postMessage()` and `onmessage` events (data is serialized/cloned). Use cases: parsing large JSON/CSV files, image/video processing, complex calculations, search indexing, encryption. Transferable objects (ArrayBuffer) can be moved without copying for better performance. SharedWorkers are shared between browser tabs. Service Workers (a special type) handle network requests, caching, and push notifications. Library Comlink simplifies the API to feel like normal async function calls.",
    category: "Browser & Web APIs",
    difficulty: "medium",
  },
  {
    id: 42,
    question: "Explain the difference between `async`, `defer`, and normal script loading.",
    answer:
      "Normal `<script>`: blocks HTML parsing — browser stops parsing, downloads the script, executes it, then resumes parsing. `<script defer>`: downloads in parallel with parsing, executes after the DOM is fully parsed, before `DOMContentLoaded`. Multiple deferred scripts execute in order. `<script async>`: downloads in parallel with parsing, executes immediately when download completes (pauses parsing). Order is not guaranteed between async scripts. Best practices: use `defer` for scripts that need the full DOM and must run in order. Use `async` for independent scripts (analytics, ads). Place critical scripts in `<head>` with `defer`. Avoid render-blocking scripts without either attribute.",
    category: "Browser & Web APIs",
    difficulty: "medium",
  },
  {
    id: 43,
    question: "What is the Intersection Observer API and what are its use cases?",
    answer:
      "Intersection Observer asynchronously observes when an element enters or exits the viewport (or a specified container). You create an observer with a callback and options (root, rootMargin, threshold), then call `observer.observe(element)`. When the element's intersection ratio crosses a threshold, the callback fires. Use cases: (1) lazy loading images and components, (2) infinite scroll (load more when sentinel enters viewport), (3) scroll-spy for table of contents highlighting, (4) analytics — tracking which content users actually see, (5) animation triggers (fade-in on scroll). It's much more performant than scroll event listeners because it runs off the main thread.",
    category: "Browser & Web APIs",
    difficulty: "medium",
  },
  {
    id: 44,
    question: "What is a Service Worker? How does it enable offline functionality?",
    answer:
      "A Service Worker is a script that the browser runs in the background, separate from the web page. It acts as a network proxy — intercepting fetch requests and serving responses from cache or network. Lifecycle: register → install (precache critical assets) → activate (clean old caches) → fetch (intercept requests). Offline strategies: cache-first (serve from cache, fall back to network), network-first (try network, fall back to cache), stale-while-revalidate (serve cache immediately, update cache from network in background). Service Workers also enable push notifications and background sync. They only work over HTTPS (except localhost).",
    category: "Browser & Web APIs",
    difficulty: "hard",
  },
  {
    id: 45,
    question: "What is the difference between `e.preventDefault()`, `e.stopPropagation()`, and `e.stopImmediatePropagation()`?",
    answer:
      "`preventDefault()` stops the browser's default action for the event (e.g., following a link, submitting a form, checkbox toggling) but the event still propagates. `stopPropagation()` stops the event from bubbling up (or capturing down) to parent elements, but other handlers on the same element still fire. `stopImmediatePropagation()` stops propagation AND prevents other handlers on the same element from firing. Common uses: `preventDefault` in form submit handlers to use AJAX instead, `stopPropagation` when a modal click shouldn't close the overlay behind it. Prefer `preventDefault` — `stopPropagation` can break event delegation and analytics.",
    category: "Browser & Web APIs",
    difficulty: "easy",
  },
  // ── Architecture ────────────────────────────────────────────
  {
    id: 46,
    question: "What are micro-frontends? When would you use them?",
    answer:
      "Micro-frontends extend microservice principles to the frontend — splitting a monolithic frontend into smaller, independently deployable applications. Each team owns a vertical slice (feature) end-to-end. Implementation approaches: (1) iframe composition (strong isolation, poor UX), (2) JavaScript integration at runtime (Module Federation), (3) Web Components, (4) server-side composition (Edge-Side Includes). Use when: you have multiple teams working on different features, teams need independent deploy cycles, or you're migrating from a legacy app incrementally. Don't use for: small teams, simple apps, or when the complexity overhead isn't justified. Key challenges: shared state, consistent styling, routing, performance (multiple frameworks loaded).",
    category: "Architecture",
    difficulty: "hard",
  },
  {
    id: 47,
    question: "What is the BFF (Backend for Frontend) pattern?",
    answer:
      "The BFF pattern places a dedicated backend service between the frontend and downstream microservices. This backend is tailored to the specific needs of its frontend client. Each frontend (web, mobile, TV) can have its own BFF. Benefits: (1) aggregate data from multiple microservices into a single response shaped for the UI, (2) reduce over-fetching and under-fetching, (3) move data transformation logic off the client, (4) simplify auth — the BFF can handle token exchange and session management, (5) frontend team controls their own data layer. Drawbacks: additional service to deploy and maintain, potential for logic duplication across BFFs. GraphQL can serve a similar purpose by letting the client specify exactly what it needs.",
    category: "Architecture",
    difficulty: "medium",
  },
  {
    id: 48,
    question: "How would you design a frontend application for offline-first usage?",
    answer:
      "Offline-first means the app works without a network connection and syncs when connectivity returns. Key patterns: (1) Service Worker caching — cache static assets and API responses using cache-first strategy. (2) IndexedDB — store structured data locally for reads and writes. (3) Optimistic UI — show changes immediately, queue mutations for later sync. (4) Conflict resolution — when syncing, handle cases where server data changed (last-write-wins, merge, or prompt user). (5) Background sync API — retry failed requests when connection returns. (6) Queue architecture — store pending mutations in a queue and process them in order. Challenges: data consistency, storage limits, cache invalidation, and testing offline flows.",
    category: "Architecture",
    difficulty: "hard",
  },
  {
    id: 49,
    question: "Explain the different component composition patterns in React.",
    answer:
      "Key patterns: (1) **Container/Presentational** — containers handle logic/data, presentational components handle rendering. Less common with hooks but still useful conceptually. (2) **Compound Components** — a parent provides implicit state to children via Context (`<Select>`, `<Select.Option>`). (3) **Render Props** — a component accepts a function prop that returns JSX, allowing behavior reuse. Largely replaced by hooks. (4) **Higher-Order Components (HOC)** — functions that take a component and return an enhanced component (`withAuth`, `withTheme`). (5) **Custom Hooks** — extract reusable stateful logic into functions (`useAuth`, `useFetch`). (6) **Slot pattern** — accept named content via props (`header`, `footer`, `children`). Modern React favors composition with hooks and the children prop over HOCs and render props.",
    category: "Architecture",
    difficulty: "medium",
  },
  {
    id: 50,
    question: "What is a design system? What makes a good one?",
    answer:
      "A design system is a collection of reusable components, guidelines, and design tokens that ensure consistency across products. It includes: (1) Design tokens — colors, spacing, typography, shadows as variables. (2) Component library — buttons, inputs, modals, etc. with consistent APIs. (3) Documentation — usage guidelines, do/don't examples, accessibility notes. (4) Design files — Figma library synced with code components. What makes a good one: composable components with clear prop APIs, accessibility built in (keyboard, screen reader, ARIA), themeable (dark mode, brand variants), versioned with a changelog, well-documented with live examples, and adopted by teams (adoption is the real measure of success). Governance matters — who decides what goes in, how breaking changes are managed.",
    category: "Architecture",
    difficulty: "medium",
  },
  // ── Testing ─────────────────────────────────────────────────
  {
    id: 51,
    question: "What is the testing pyramid and how does it apply to frontend?",
    answer:
      "The testing pyramid recommends more unit tests at the base, fewer integration tests in the middle, and even fewer end-to-end tests at the top. In frontend: **Unit tests** (Jest/Vitest) — test individual functions, hooks, utilities. Fast, reliable, cheap. **Integration tests** (Testing Library) — test components with their children, mocked APIs. Verify that components work together. **E2E tests** (Playwright/Cypress) — test real user flows in a browser. Slow, flaky, expensive but highest confidence. The \"trophy\" model (Kent C. Dodds) suggests more integration tests than unit tests for frontend, since most bugs occur at the boundary between components. Focus tests on user behavior, not implementation details.",
    category: "Testing",
    difficulty: "easy",
  },
  {
    id: 52,
    question: "How do you test React components effectively?",
    answer:
      "Use React Testing Library, which encourages testing behavior rather than implementation. Principles: (1) Render the component as a user would see it. (2) Query elements the way users find them — by role, label, text, not by class or test ID. Priority: `getByRole` > `getByLabelText` > `getByText` > `getByTestId`. (3) Interact like a user — `userEvent.click()`, `userEvent.type()`. (4) Assert on visible outcomes — text content, element presence, accessibility states. Avoid: testing state variables directly, shallow rendering, testing implementation details (internal function calls). For async behavior: use `findBy` queries (wait for elements) or `waitFor`. Mock API calls with MSW (Mock Service Worker) for realistic network mocking.",
    category: "Testing",
    difficulty: "medium",
  },
  {
    id: 53,
    question: "What is Mock Service Worker (MSW) and why use it over other mocking approaches?",
    answer:
      "MSW intercepts network requests at the service worker level, providing realistic API mocking without changing application code. Unlike mocking `fetch` or `axios` directly, MSW works regardless of how the app makes requests — the application code runs exactly as it would in production. Benefits: (1) tests hit real fetch/axios code paths, (2) same mock definitions work in tests, development, and Storybook, (3) realistic network behavior (delays, errors, headers), (4) no leaky abstractions — you mock at the network boundary, not the implementation. Setup: define request handlers that match URL patterns and return mock responses. Works with Jest, Vitest, Playwright, and browser environments.",
    category: "Testing",
    difficulty: "medium",
  },
  {
    id: 54,
    question: "What is visual regression testing and how do you implement it?",
    answer:
      "Visual regression testing captures screenshots of UI components or pages and compares them against baseline images to detect unintended visual changes. Implementation: (1) Capture screenshots during CI — tools: Percy, Chromatic, Playwright screenshots, BackstopJS. (2) Compare against approved baselines — pixel diff or AI-powered visual diff. (3) Review and approve intentional changes, flag regressions. Best practices: test components in isolation (Storybook + Chromatic), cover multiple viewports and themes (light/dark), use consistent rendering environment (Docker) to avoid cross-platform pixel differences. Trade-offs: can be flaky with animations/fonts, requires baseline management, AI-powered tools (Applitools) reduce false positives but cost more.",
    category: "Testing",
    difficulty: "medium",
  },
  {
    id: 55,
    question: "How do you test custom React hooks?",
    answer:
      "Custom hooks can't be called outside of components, so you need a wrapper. Use `renderHook` from `@testing-library/react`: `const { result } = renderHook(() => useMyHook(args))`. Access the return value via `result.current`. To trigger state updates, wrap in `act()`: `act(() => { result.current.increment(); })`. For hooks that need context providers, pass a `wrapper` option. Testing strategies: (1) test the hook's return values and side effects, (2) test different argument combinations, (3) test error cases, (4) for async hooks, use `waitFor` to assert on settled state. Sometimes it's better to test the hook indirectly by testing a component that uses it — this gives higher confidence that it works in context.",
    category: "Testing",
    difficulty: "medium",
  },
];

export function getRandomQuestion(
  exclude?: number[],
  category?: Category,
  difficulty?: Question["difficulty"]
): Question | null {
  let pool = questions;
  if (category) pool = pool.filter((q) => q.category === category);
  if (difficulty) pool = pool.filter((q) => q.difficulty === difficulty);
  if (exclude?.length) pool = pool.filter((q) => !exclude.includes(q.id));
  if (pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getQuestionsByCategory(category: Category): Question[] {
  return questions.filter((q) => q.category === category);
}

export function getQuestionStats() {
  const byCategory: Record<string, number> = {};
  const byDifficulty: Record<string, number> = {};
  for (const q of questions) {
    byCategory[q.category] = (byCategory[q.category] || 0) + 1;
    byDifficulty[q.difficulty] = (byDifficulty[q.difficulty] || 0) + 1;
  }
  return { total: questions.length, byCategory, byDifficulty };
}
