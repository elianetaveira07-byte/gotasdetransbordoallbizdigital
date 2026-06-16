const Footer = () => {
  return (
    <footer style={{ background: '#0a0e14' }} className="pt-4 pb-10 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center mt-6 text-xs text-white/40">
          Chapada do Araripe, PE → Goiânia, GO • {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
