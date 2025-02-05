import Image from "next/image";
import Logo from "/public/image.png";

export default function Header() {
	return (
		<header className="flex justify-between items-center p-4 bg-secondary-400 border-b border-secondary-300">
			<div className="flex items-center">
				<Image
					src={Logo}
					alt="EvoMind Logo"
					width={40}
					height={40}
					className="bg-primary rounded-lg !h-10 !w-10 object-cover"
				/>
			</div>
			<div className="flex items-center space-x-4">
				<button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-600 transition-colors">
					CONNECT
				</button>
				<div className="bg-primary-light text-primary rounded-full px-2 py-1">
					0.0
				</div>
				<div className="w-8 h-8 bg-secondary-200 rounded-full"></div>
			</div>
		</header>
	);
}
