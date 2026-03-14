const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nour Abulnasr. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
