import Link from 'next/link';

const Header = () => {
    return (
        <div className='flex w-[100%] p-10 justify-between bg-slate-600 text-white text-xl'>
            <Link href={"/"}>Logo</Link>
            <Link href={"/login"}>Login</Link>
            <Link href={"/admin/dashboard"}>Admin</Link>
        </div>
    );
}

export { Header };