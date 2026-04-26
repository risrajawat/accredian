import { footerColumns } from '@/data/mockData'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-white">Accredian</span>
              <span className="text-xs text-gray-400 border border-gray-600 rounded px-1.5 py-0.5">
                Enterprise
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              India is most trusted enterprise learning platform. Upskill your workforce with programs from IITs, IIMs, and global universities.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold text-white mb-4">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Accredian. All rights reserved. Accredian is a registered trademark.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-500 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white">Terms of Service</a>
            <a href="#" className="text-xs text-gray-500 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}