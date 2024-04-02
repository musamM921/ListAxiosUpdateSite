import Link from "next/link";

const Navabr = () => {
    return ( 
      <nav>
        <div className="logo">
            <h1>Ninja List</h1>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja Listing</Link>
        <Link href="/contacts">Contacts</Link>
      </nav>
     );
}
 
export default Navabr;