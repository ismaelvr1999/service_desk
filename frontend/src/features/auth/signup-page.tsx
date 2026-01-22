import useSignUp from "./use-signup";

export function SignUpPage() {
    const { register, handleSubmit, onSubmit } = useSignUp();
    return (
        <div className="p-6 w-lg h-fit border rounded-xl border-blue text-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="text-4xl font-semibold mb-6 ">Sign Up</h5>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl font-semibold">First name</label>
                    <input {...register("firstName", { required: true })} type="text" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl font-semibold">Last name</label>
                    <input {...register("lastName", { required: true })} type="text" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" required />
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl font-semibold">Email</label>
                    <input {...register("email", { required: true })} type="email" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" required placeholder="example@gmail.com" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl font-semibold">Phone Number</label>
                    <input {...register("phoneNumber")} type="number" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl font-semibold">Password</label>
                    <input {...register("password", { required: true })} type="password" id="password" className="border border-blue rounded-lg text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" placeholder="•••••••••" required />
                </div>
                <button type="submit" className=" cursor-pointer text-primary font-semibold rounded-lg bg-blue leading-5 text-xl px-4 py-2.5 w-full">Sign Up</button>
            </form>
        </div>
    );
}