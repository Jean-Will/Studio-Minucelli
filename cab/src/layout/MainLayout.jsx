import React from 'react'


export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      
      <header className="boorder-b bg-white">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
            <span className="font-semibold text-lg">Studio Minucelli</span>
            <nav className="hidden md:flex space-x-4 text-sm">
                <a href="#home" className="text-slate-700 hover:text-slate-900">Home</a>
                <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
                <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
                <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
            </nav> 
        </div>
      </header>

      {/* Main content area */ }
      <main className="flex-1">{children} </main>

      {/* Footer */ }
      <footer className="boorder-t bg-white">
        <div className="max-w-5xl mx-auto px-4 pt-4 text-xs text-slate-500 flex justify-center">
            <span>&copy; 2026 Studio Minucelli. All rights reserved. </span>
            <a href="//www.instagram.com/jean.will_/" 
            target="_blank"
            rel="noopener noreferrer" 
            className="hover:text-slate-700 ml-2">Created by Elohim </a>
        </div>
      </footer>
    </div>
  )
}
