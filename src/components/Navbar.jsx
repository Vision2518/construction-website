const Navbar=()=>{
    const links=[
        {name:"Home", href:"#Home"}, 
        {name:"About" ,href:"#About"},
        { name:"Services",href:"#Services"},
        {name:"Projects",href:"#Projects"},
        {name:"Contact",href:"#Contact"}
    ]
return(
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a className="text-slate-900 font-bold">Build<span className="text-orange-500">Pro</span></a>
        <div className="hidden md:flex items-center gap-8">
            {links.map((link)=>(
                <a key={link.name}
                href={link.href}>{link.name}</a>
            )
            )}
             <a
          href="#contact"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Get a Quote →
        </a>

        </div>
        </div>
    </nav>
)
}
export default Navbar