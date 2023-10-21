import Union from "./svg/Union"

const Header = () => {
  return (
    <>
    <section className="relative flex flex-col gap-y-2 items-center mt-5 text-gray-50">
      <h1 className="text-8xl/[150px] font-bold font-libre-franklin">WAR</h1>
      <Union width="36" height="35" classes="absolute mt-32"/>
      <h1 className="text-8xl/[125px] font-bold font-libre-franklin">HOUSE</h1>
      <section className="flex flex-row w-full font-libre-basker font-light justify-between">
        <p>Recording</p>
        <svg width="27" height="24" viewBox="0 0 27 24" className="fill-gray-50" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4956 13.488C12.2183 13.488 11.9623 13.4187 11.7276 13.28C11.5036 13.1413 11.3223 12.96 11.1836 12.736C11.045 12.5013 10.9756 12.2453 10.9756 11.968C10.9756 11.6907 11.045 11.44 11.1836 11.216C11.3223 10.9813 11.5036 10.7947 11.7276 10.656C11.9623 10.5173 12.2183 10.448 12.4956 10.448C12.773 10.448 13.0236 10.5173 13.2476 10.656C13.4823 10.7947 13.669 10.9813 13.8076 11.216C13.9463 11.44 14.0156 11.6907 14.0156 11.968C14.0156 12.2453 13.9463 12.5013 13.8076 12.736C13.669 12.96 13.4823 13.1413 13.2476 13.28C13.0236 13.4187 12.773 13.488 12.4956 13.488Z" fill="#E7E7E7"/>
        </svg>
        <p>Mixing</p>
        <svg width="27" height="24" viewBox="0 0 27 24" className="fill-gray-50" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.4956 13.488C12.2183 13.488 11.9623 13.4187 11.7276 13.28C11.5036 13.1413 11.3223 12.96 11.1836 12.736C11.045 12.5013 10.9756 12.2453 10.9756 11.968C10.9756 11.6907 11.045 11.44 11.1836 11.216C11.3223 10.9813 11.5036 10.7947 11.7276 10.656C11.9623 10.5173 12.2183 10.448 12.4956 10.448C12.773 10.448 13.0236 10.5173 13.2476 10.656C13.4823 10.7947 13.669 10.9813 13.8076 11.216C13.9463 11.44 14.0156 11.6907 14.0156 11.968C14.0156 12.2453 13.9463 12.5013 13.8076 12.736C13.669 12.96 13.4823 13.1413 13.2476 13.28C13.0236 13.4187 12.773 13.488 12.4956 13.488Z" fill="#E7E7E7"/>
        </svg>
        <p>Mastering</p>
      </section>
      <button className="hover:border-warhouse-red hover:bg-warhouse-red hover:text-gray-50 font-libre-basker text-gray-950 border-2 border-gray-50 bg-gray-50 rounded-sm text-lg p-4 px-16 my-10">
            Contact
      </button>
    </section>
    </>
  )
}

export default Header;