function HomePage() {
  return (
    <div className="app">
      <header>
        <LoginButton />
      </header>
      <main>
        <h1>Welcome to Our Course</h1>
        <p>A professional, minimalist learning experience</p>
      </main>
      <footer>
        <PurchaseButton />
      </footer>
    </div>
  );
}