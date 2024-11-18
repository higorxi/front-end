const Footer = () => {
    return (
      <footer className="w-full bg-gray-100 border-t border-gray-200 p-4 flex justify-center items-center">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  