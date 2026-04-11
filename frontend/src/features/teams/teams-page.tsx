import { useState } from "react"
import { NavLink } from "react-router";

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
                        <button className={currentTab == "agents" ? activeTabStyle : noActiveTabStyle} onClick={() => setCurrentTab("agents")}>
                            Agents
                        </button>
                        <button className={currentTab == "teams" ? activeTabStyle : noActiveTabStyle} onClick={() => setCurrentTab("teams")}>
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
                    <NavLink to="/teams/create" className="bg-blue text-primary text-xl px-2 py-1 border rounded-lg">
                        + Add
                    </NavLink>
                </div>
                {
                    /* agents table */
                    currentTab === "agents" && (
                        <table className="text-body text-left w-full">
                            <thead className="text-2xl">
                                <tr>
                                    <th className="w-9 p-2"></th>
                                    <th className="p-2">Name</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                <tr className="border-t border-b">
                                    <td className="w-9 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 16 16">
                                            <path fill="currentColor" d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3"></path>
                                            <path fill="currentColor" fillRule="evenodd" d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75" clipRule="evenodd"></path>
                                        </svg>
                                    </td>
                                    <td className="p-2">
                                        <p className="font-bold">Jane doe</p>
                                        <p>janedoe@gmail.com</p>
                                    </td>
                                    {/*<td className="p-2"><p className="bg-lavander w-fit text-primary border rounded-xl px-1">Admin</p></td>*/}
                                </tr>
                            </tbody>
                        </table>
                    )
                }

                {
                    /* team table */
                    currentTab === "teams" && (
                        <table className="text-body text-left w-full">
                            <thead className="text-2xl">
                                <tr>
                                    <th className="w-9 p-2"></th>
                                    <th className="p-2">Name</th>
                                    <th className="p-2">Created at</th>
                                </tr>
                            </thead>
                            <tbody className="text-lg">
                                <tr className="border-t border-b">
                                    <td className="w-9 p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M12 10a4 4 0 1 0 0-8a4 4 0 0 0 0 8m-6.5 3a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 10.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-9 .5a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-7 5c0-.693.1-1.362.288-1.994l-.17.014A3.5 3.5 0 0 0 2 17.5V22h3zm17 6v-4.5a3.5 3.5 0 0 0-3.288-3.494c.187.632.288 1.301.288 1.994v6z"></path>
                                        </svg>
                                    </td>
                                    <td className="p-2">
                                        <p className="font-bold">Development</p>
                                        <p>Development@gmail.com</p>
                                    </td>
                                    <td>
                                        Tue 11 Nov. 21:14
                                    </td>
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

                <div className="text-body flex pt-2">
                    <svg className="text-body" xmlns="http://www.w3.org/2000/svg" width={55} height={55} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path>
                    </svg>
                    <div>
                        <p className="text-lg font-bold">Jane Doe</p>
                        <p className="text-lg">janedoe@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    )
}