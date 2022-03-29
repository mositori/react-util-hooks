# react-util-hooks

A Collection of utility React hooks ✨

## List of React hooks

### `useBoolean`

`useBoolean` is a custom hooks specialized for managing boolean value.
Heavily inspired by Chakra UI implementation.

### Usecase

Using `useBoolean`, you can just pass `toggle`, `on`, `off` setter function reference like below.

#### `useBoolean` example

✅ toggle, on, off is memoized.

✅ avoid boilerplate codes.

```ts
function SomeComponent() {
  const [isMenuOpen, setIsMenuOpen] = useBoolean(false);

  return (
    <div>
      {isMenuOpen && <Menu />}
      <button onClick={setIsMenuOpen.toggle}>Toggle Menu</button>
      <button onClick={setIsMenuOpen.on}>Open Menu</button>
      <button onClick={setIsMenuOpen.off}>Close Menu</button>
    </div>
  );
}
```

#### Plain `useState` example

❌ You need to manually memoize setter function if you want.

❌ Just bored :(

```ts
function SomeComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {isMenuOpen && <Menu />}
      <button onClick={() => setIsMenuOpen((prev) => !prev)}>
        Toggle Menu
      </button>
      <button onClick={() => setIsMenuOpen(false)}>Open Menu</button>
      <button onClick={() => setIsMenuOpen(true)}>Close Menu</button>
    </div>
  );
}
```

### `useOutsideClick`

`useOutsideClick` is for handling click event outside specific elements.
It's suitable for when creating a popover or drowdown component.

#### Usecase

Good combination with `useBoolean` hook in this case ✨
Also unlike other similer outside click hook, it can accept multiple refs for excluding click event, and provides `onClickUp` and `onClickDown`!

✅ Accept multiple exclusions for outside click.

✅ Two types of handlers `onClickUp` and `onClickDown` provided!

```ts
function SomeComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const toggleRef = useRef();

  useOutsideClick({
    enabled: isMenuOpen,
    onClickUp: setIsMenuOpen.close,
    excludes: [menuRef, toggleRef],
  });

  return (
    <div>
      {isMenuOpen && <Menu ref={menuRef} />}
      <button ref={toggleRef} onClick={setIsMenuOpen.toggle}>
        Toggle Menu
      </button>
    </div>
  );
}
```

## License
MIT License
