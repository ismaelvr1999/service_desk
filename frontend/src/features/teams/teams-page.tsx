export function TeamsPage() {
    return (
        <div className="flex w-full h-full">
            {/* main content*/}
            <div className=" h-full w-5/6 pt-5 px-4">
                {/*header */}
                <div className="flex items-center h-fit">
                    <div className="flex h-full items-center">
                        {/* tabs */}
                        <h1 className="text-xl cursor-pointer text-primary bg-body px-4 border rounded-xl">
                            Agents
                        </h1>
                        <h1 className="text-xl cursor-pointer text-body px-4">
                            Teams
                        </h1>
                    </div>
                    {/* search */}
                    <div className="flex items-center h-full gap-2 ml-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-body">
                            <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" />
                        </svg>
                        <input type="text" className="py-0.5 border border-body rounded-lg text-body text-lg" />
                    </div>
                    {/* Pagination */}
                    <div className="flex mx-4">
                        <p className="text-primary py-1 text-xl cursor-pointer px-3 bg-body border rounded-lg">
                            1
                        </p>
                        <p className="text-body py-1 text-xl cursor-pointer px-3">
                            2
                        </p>
                        <p className="text-body py-1 text-xl cursor-pointer px-3">
                            3
                        </p>
                    </div>
                    {/* Add button */}
                    <button className="bg-blue text-primary text-xl px-2 py-1 border rounded-lg">
                        + Add
                    </button>
                </div>
            </div>
            {/* Details */}
            <div className="h-full w-1/6 bg-submenu">
                <p className="text-body"> Details</p>
            </div>
        </div>
    )
}