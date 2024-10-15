import Button from "./Button";

const handleClosing = () => {
    //alert('Button clicked!');
    document.getElementById("sidebar").style.display = "none";
};

function Sidebar() {
    return (
        <div className="w-1/3 z-10 bg-white hidden max-sm:text-sm" id="sidebar">
            <Button displayText="X" onClick={handleClosing} />
            <ul className="flex flex-col gap-3 flex-grow p-3 border-t-[1px] border-t-gray-300">
                <li><a href="https://www.google.com" className="p-1 flex">About Us</a> </li>
                <li><a href="https://www.google.com" className="p-1 border-t-[1px] border-t-gray-300 flex">Latest Launches</a> </li>
                <li><a href="https://www.google.com" className="p-1 border-t-[1px] border-t-gray-300 flex">Communities</a> </li>
                <li><a href="https://www.google.com" className="p-1 border-t-[1px] border-t-gray-300 flex">Sustainability</a> </li>
                <li><a href="https://www.google.com" className="p-1 border-t-[1px] border-t-gray-300 flex">Eng</a> </li>
                <li><a href="https://www.google.com" className="p-1 border-t-[1px] border-t-gray-300 flex">Instant Video Call</a> </li>
                <li>
                    <Button displayText="Get In Touch" url="https://www.google.com" theme="dark" width="full" />
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;