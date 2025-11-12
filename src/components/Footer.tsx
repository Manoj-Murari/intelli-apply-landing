const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-text-tertiary">
            © 2025 IntelliApply
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="#privacy"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#contact"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
