import SearchIcon from "@/components/SearchIcon"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

const Profile:React.FC = () => {
    return (
    <div className="flex flex-col gap-12 min-h-screen">
        <Header>
            <div className="font-semibold">Profile</div>
            <div className="icons flex flex-row items-center gap-3">
                <div className="favorite cursor-pointer">
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <SearchIcon/>
            </div>
        </Header>
        <div className="flex flex-col items-center gap-6 flex-1">
            <div className="profile-picture rounded-full border-3 border-green-500 w-35 p-1">
                <Image
                    src={"/profile-picture.jpg"}
                    alt="user"
                    width={200}
                    height={200}
                    className="rounded-full"
                />
            </div>
            <div className="flex flex-col items-center gap-2">
                <span className="font-sans font-semibold">Marshmello</span>
                <span className="text-sm text-gray-400 font-sans">@marshmello</span>
            </div>
            <div className="flex flex-row gap-4 cursor-pointer">
                <Link href="">  
                    <div className="message flex flex-row items-center border-1 border-gray-300 rounded-3xl py-2 px-5">
                        <div className="bg-green-500 w-2 h-2 rounded-full"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 2100 2100">
                            <path fillRule="nonzero" fill="rgb(0%, 0%, 0%)" fillOpacity="1" d="M 485.585938 525 C 443.109375 525 407.640625 560.558594 407.640625 602.941406 L 407.640625 1225.300781 C 407.640625 1267.691406 443.242188 1303.246094 485.585938 1303.246094 L 639.988281 1303.246094 L 808.320312 1546.851562 C 809.632812 1548.859375 811.121094 1550.742188 812.765625 1552.484375 C 842.664062 1582.503906 892.820312 1582.507812 922.714844 1552.484375 C 924.464844 1550.753906 926.046875 1548.871094 927.449219 1546.851562 L 1095.488281 1303.246094 L 1614.710938 1303.246094 C 1657.058594 1303.246094 1692.359375 1267.695312 1692.359375 1225.300781 L 1692.359375 602.941406 C 1692.359375 560.550781 1657.191406 525 1614.710938 525 Z M 487.949219 605.308594 L 1612.339844 605.308594 L 1612.339844 1222.929688 L 1074.449219 1222.929688 C 1061.328125 1222.941406 1049.050781 1229.359375 1041.550781 1240.117188 L 867.886719 1491.730469 L 694.21875 1240.117188 C 686.65625 1229.273438 674.246094 1222.847656 661.023438 1222.929688 L 487.949219 1222.929688 Z M 487.949219 605.308594 "/>
                            <path fillRule="nonzero" fill="rgb(0%, 0%, 0%)" fillOpacity="1" d="M 823.519531 925.761719 C 823.519531 966.570312 790.4375 999.660156 749.621094 999.660156 C 708.808594 999.660156 675.726562 966.570312 675.726562 925.761719 C 675.726562 884.949219 708.808594 851.859375 749.621094 851.859375 C 790.4375 851.859375 823.519531 884.949219 823.519531 925.761719 Z M 823.519531 925.761719 "/>
                            <path fillRule="nonzero" fill="rgb(0%, 0%, 0%)" fillOpacity="1" d="M 1124.039062 925.761719 C 1124.039062 966.570312 1090.960938 999.660156 1050.140625 999.660156 C 1009.328125 999.660156 976.242188 966.570312 976.242188 925.761719 C 976.242188 884.949219 1009.328125 851.859375 1050.140625 851.859375 C 1090.960938 851.859375 1124.039062 884.949219 1124.039062 925.761719 Z M 1124.039062 925.761719 "/>
                            <path fillRule="nonzero" fill="rgb(0%, 0%, 0%)" fillOpacity="1" d="M 1424.558594 925.761719 C 1424.558594 966.570312 1391.46875 999.660156 1350.660156 999.660156 C 1309.851562 999.660156 1276.761719 966.570312 1276.761719 925.761719 C 1276.761719 884.949219 1309.851562 851.859375 1350.660156 851.859375 C 1391.46875 851.859375 1424.558594 884.949219 1424.558594 925.761719 Z M 1424.558594 925.761719 "/>
                        </svg>
                        <span className="text-gray-500">Message</span>
                    </div>
                </Link>
                <button className="bg-green-500 text-white px-5 py-2 rounded-3xl cursor-pointer">Follow</button>
            </div>
            <div className="flex flex-row gap-5 sm:w-1/2 sm:justify-between items-center">
                <div className="flex flex-col items-center border-1 border-gray-300 p-4 rounded-md w-25">
                    <span className="text-2xl">6.3K</span>
                    <span className="text-gray-400">Followers</span>
                </div>
                <div className="flex flex-col items-center border-1 border-gray-300 p-4 rounded-md w-25">
                    <span className="text-2xl">600</span>
                    <span className="text-gray-400">Posts</span>
                </div>
                <div className="flex flex-col items-center border-1 border-gray-300 p-4 rounded-md w-25">
                    <span className="text-2xl">2.3K</span>
                    <span className="text-gray-400">Following</span>
                </div>
            </div>
        </div>
        <div className="py-15 px-5 w-full border-t-1 border-gray-300">
            <div className="slider flex flex-row justify-center gap-5 overflow-x-auto w-full">
                <div className="relative h-65 w-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative h-65 w-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative h-65 w-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative h-65 w-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative h-65 w-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative h-65 w-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image 
                        src={"/profile-picture.jpg"}
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Profile
