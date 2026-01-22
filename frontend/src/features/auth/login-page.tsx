import useLogin from "./use-login";
export function LoginPage() {
    const { register, handleSubmit, onSubmit } = useLogin();
    return (
        <div className="p-6 w-lg h-fit border rounded-xl border-blue text-body">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="text-4xl font-semibold mb-6 ">Sign in {/*count*/}</h5>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl font-semibold" htmlFor="email">Your email</label>
                    <input {...register("email", { required: true})} id="email" type="email" placeholder="example@company.com" className="border rounded-lg border-blue text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0"/>
                </div>
                <div className="mb-4">
                    <label className="block mb-2.5 text-xl font-semibold" htmlFor="password">Your password</label>
                    <input {...register("password",{ required: true})} type="password" id="password" name="password" placeholder="•••••••••" className="border border-blue rounded-lg text-xl block w-full px-3 py-2.5 placeholder:text-subtext-0" />
                </div>
                <button type="submit" className="cursor-pointer text-primary rounded-lg bg-blue leading-5 text-xl px-4 py-2.5 w-full">Login</button>
            </form>
        </div>
    );
}