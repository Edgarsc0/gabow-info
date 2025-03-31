export default function ({ text }) {
    return (
        <div className="text-center mt-10">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                {text}
            </h1>

            <div className="mt-4">
                <div className="border-t border-4 border-yellow-500 flex-grow"></div>
            </div>
        </div>
    )
}