export function SignUpPage() {
    return (
        <div className="p-6 w-lg h-fit border rounded-xl border-blue text-body">
            <form action="#">
                <h5 className="text-4xl font-semibold mb-6 ">Sign Up</h5>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl">First name</label>
                    <input type="text" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl">Last name</label>
                    <input type="text" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl">Email</label>
                    <input type="email" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" required placeholder="example@gmail.com" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl">Phone Number</label>
                    <input type="number" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl">Password</label>
                    <input type="password" id="password" className="border border-blue rounded-lg text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" placeholder="•••••••••" required />
                </div>
                <button type="submit" className=" cursor-pointer text-primary rounded-lg bg-blue leading-5 text-xl px-4 py-2.5 w-full">Sign Up</button>
            </form>
        </div>
    );
}