"use client"

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-inner mt-8">
      <div className="mx-auto p-4 text-center container">
        <p className="text-gray-600 text-sm dark:text-gray-300">
          &copy; {new Date().getFullYear()} UDIT. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
