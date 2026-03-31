import { useState } from "react"

export function TeamsPage() {
    let [currentTab, setCurrentTab] = useState<"teams" | "agents">("agents");
    let activeTabStyle = "text-xl cursor-pointer text-primary bg-body px-4 border rounded-xl";
    let noActiveTabStyle = "text-xl cursor-pointer text-body px-4";
    return (
        <div className="flex w-full h-full">
            {/* main content*/}
            <div className=" h-full w-5/6 pt-5 px-4">
                {/*header */}
                <div className="flex items-center h-fit">
                    <div className="flex h-full items-center">
                        {/* tabs */}
                        <button  className={currentTab == "agents" ? activeTabStyle : noActiveTabStyle} onClick={ () => setCurrentTab("agents")}>
                            Agents
                        </button>
                        <button  className={currentTab == "teams" ? activeTabStyle : noActiveTabStyle} onClick={() => setCurrentTab("teams")}>
                            Teams
                        </button>
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
                {/* agents table */}
                {
                    currentTab === "agents" && (
                        <table className="w-full text-body text-left">
                            <thead className="text-2xl">
                                <tr>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Role</th>
                                </tr>
                            </thead>
                            <tbody className="text-xl">
                                <tr className="border-t border-b">
                                    <td className="p-2">Foo</td>
                                    <td className="p-2">bar</td>
                                </tr>
                                <tr className="border-t border-b">
                                    <td className="p-2">Foo</td>
                                    <td className="p-2">bar</td>
                                </tr>

                            </tbody>
                        </table>
                    )
                }

                {/* team table */}
                {
                    currentTab === "teams" && (
                        <table className="w-full text-body text-left">
                            <thead className="text-2xl">
                                <tr>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Created at</th>
                                </tr>
                            </thead>
                            <tbody className="text-xl">
                                <tr className="border-t border-b">
                                    <td className="p-2">Foo</td>
                                    <td className="p-2">bar</td>
                                </tr>
                                <tr className="border-t border-b">
                                    <td className="p-2">Foo</td>
                                    <td className="p-2">bar</td>
                                </tr>

                            </tbody>
                        </table>
                    )
                }
            </div>
            {/* Details */}
            <div className="h-full w-1/6 bg-submenu  pt-5 px-4">
                <div className="flex">
                    <p className="text-body text-3xl font-bold flex-1 text-center">Details</p>

                    <svg xmlns="http://www.w3.org/2000/svg" className="text-body" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m16 2.012l3 3L16.713 7.3l-3-3zM4 14v3h3l8.299-8.287l-3-3zm0 6h16v2H4z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}