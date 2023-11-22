import React from "react";

export default function Footer (){
    return(
        <main className="p-10">
            <p className="border mb-5"></p>
            <div className="flex justify-between">
                <h1 className="flex gap-5">
                <img src="https://cdn-icons-png.flaticon.com/128/732/732084.png" className="w-16"></img>
                <p className="text-xs my-auto font-semibold">@2023 NIKE, Inc. All Rights Reserved</p>
            </h1>
            <h2 className="flex gap-3">
                <img src="https://cdn-icons-png.flaticon.com/128/4401/4401407.png" className="h-8 my-auto"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" className="h-8 my-auto"></img>
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" className="h-8 my-auto"></img>
            </h2>
            </div>
            
        </main>
    )
}