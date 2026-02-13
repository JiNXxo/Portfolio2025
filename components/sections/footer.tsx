export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Leonald Pilvera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
