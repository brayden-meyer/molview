function NavBar() {
    return (
        <nav className="bg-violet-950 text-white py-4">
            <div className="flex w-screen items-baseline">
                <div className="flex-1 flex justify-start ml-10">
                    <a href="#" className="mr-4">Elements</a>
                    <a href="#">Molecules</a>
                </div>
                <div className="text-2xl font-bold">MolView</div>
                <div className="flex-1 flex justify-end mr-10">
                    <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-full">Login</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar