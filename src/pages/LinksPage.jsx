import { TbBrandGithubFilled } from "react-icons/tb";

const LinksPage = () => {
  return (
    <div className="bg-white text-[#737373] m-5 py-4 px-5 rounded-lg">
      <h1 className="text-2xl text-[#333333] font-bold my-2">Customize your links</h1>
      <p className="mb-8">Add/edit/remove links below and then share all your profiles with the world!</p>
      <button className="border-2 border-[#633CFF] text-[#633CFF] font-semibold w-full py-3 rounded-lg mb-8">+ Add new link</button>
      <div className="bg-[#FAFAFA] px-6 py-10 text-center mb-4 rounded-lg">
        {/* Before first link */}
        {/* <div className="flex flex-col justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="125" height="75" fill="none" viewBox="0 0 250 161"><path fill="#fff" d="M48.694 15.421C23.379 25.224 4.594 50.068.858 80.128c-3.12 25.331 4.335 53.318 48.23 61.291 85.406 15.52 173.446 17.335 193.864-24.525 20.417-41.86-7.525-108.891-50.873-113.53C157.683-.326 98.146-3.721 48.694 15.42Z" opacity=".3"/><path fill="#333" d="M157.022 9.567H93.044a7.266 7.266 0 0 0-7.266 7.267v120.91a7.266 7.266 0 0 0 7.266 7.266h63.978a7.266 7.266 0 0 0 7.267-7.266V16.834a7.266 7.266 0 0 0-7.267-7.267Z"/><path fill="#333" d="M125.033 140.872a5.687 5.687 0 1 0 0-11.374 5.687 5.687 0 0 0 0 11.374Z" opacity=".03"/><path fill="#EFEBFF" d="M156.628 21.321H93.431V126.78h63.197V21.321Z"/><path fill="#333" d="M117.797 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13Z" opacity=".03"/><path fill="#fff" d="M125.033 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132Z" opacity=".44"/><path fill="#333" d="M132.269 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132ZM148.199 32.953h-46.332v39.552h46.332V32.953ZM134.373 80.129h-32.506v3.621h32.506V80.13ZM148.199 80.129h-11.632v3.621h11.632V80.13ZM117.053 91.237h-15.186v3.622h15.186v-3.622ZM148.199 91.237H120.28v3.622h27.919v-3.622ZM136.954 102.353h-35.087v3.622h35.087v-3.622Z" opacity=".03"/><path fill="#EFEBFF" d="M78.656 21.321H15.459V126.78h63.197V21.321Z"/><path fill="#fff" d="M39.825 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13Z" opacity=".44"/><path fill="#333" d="M47.061 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM54.297 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM70.227 32.953H23.895v39.552h46.332V32.953ZM56.4 80.129H23.895v3.621H56.4V80.13ZM70.227 80.129H58.595v3.621h11.632V80.13ZM39.08 91.237H23.896v3.622H39.08v-3.622ZM70.227 91.237h-27.92v3.622h27.92v-3.622ZM58.982 102.353H23.895v3.622h35.087v-3.622Z" opacity=".03"/><path fill="#EFEBFF" d="M234.6 21.321h-63.197V126.78H234.6V21.321Z"/><path fill="#333" d="M195.769 120.508a2.065 2.065 0 1 0 0-4.13 2.065 2.065 0 0 0 0 4.13ZM203.005 120.508a2.066 2.066 0 1 0 0-4.132 2.066 2.066 0 0 0 0 4.132Z" opacity=".03"/><path fill="#fff" d="M210.242 120.508a2.066 2.066 0 1 0-.001-4.131 2.066 2.066 0 0 0 .001 4.131Z" opacity=".44"/><path fill="#333" d="M226.171 32.953h-46.332v39.552h46.332V32.953ZM212.345 80.129h-32.506v3.621h32.506V80.13ZM226.171 80.129h-11.632v3.621h11.632V80.13ZM195.025 91.237h-15.186v3.622h15.186v-3.622ZM226.179 91.237H198.26v3.622h27.919v-3.622ZM214.926 102.353h-35.087v3.622h35.087v-3.622Z" opacity=".03"/><path fill="#333" d="M146.597 145.041c0-.76-1.61-31.891-.577-36.522 1.033-4.632 10.509-27.274 8.011-29.917-2.498-2.642-11.648 3.372-11.648 3.372s1.671-27.267-2.278-29.21c-3.948-1.944-5.702 5.671-5.702 5.671L132.3 88.936l-10.418 55.96 24.715.145Z" opacity=".1"/><path fill="#F4A28C" d="M139.559 113.295c1.328-5.316 3.325-10.502 4.601-15.87.843-3.553 6.295-18.405 7.821-22.779.47-1.344.873-2.969-.038-4.062a2.646 2.646 0 0 0-2.422-.76 4.842 4.842 0 0 0-2.339 1.223c-1.519 1.337-4.32 7.95-6.371 7.943-2.482 0-1.313-6.834-1.381-8.148-.281-5.656.136-12.908-2.073-18.223-1.64-3.948-5.71-3.417-6.667.85-.957 4.268-.919 22.15-.919 22.15s-15.884-2.727-18.595 2.118c-2.711 4.844 1.868 35.618 1.868 35.618l26.515-.06Z"/><path fill="#633CFF" d="m141.495 160.5-.289-48.906-29.681-6.515L99.574 160.5h41.921Z"/><path fill="#333" d="m141.495 160.5-.289-48.906-14.168-3.113-2.536 52.019h16.993Z" opacity=".1"/></svg>
          <h2 className="text-2xl text-[#333333] font-bold my-2 mb-6">Let's get you started</h2>
          <p>Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!</p>
        </div> */}
        {/* After first link */}
        <div>
          <div className="flex justify-between">
            <div className="font-bold mb-2">= Link #1</div>
            <div>Remove</div>
          </div>
          <form>
            <div className="flex flex-col items-start mb-4 relative">
              <label htmlFor="options" className="block text-sm font-medium mb-1">
                Platform
              </label>
              <select
                id="options"
                className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-[#633CFF] focus:border-[#633CFF]"
              >
                <option value="">
                  <span className="flex items-center">
                    <TbBrandGithubFilled className="mr-2" />
                    GitHub
                  </span>
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="link" className="mb-1">Link</label>
              <input 
                id="link" 
                name="link" 
                type="text" 
                placeholder="eg. https://github.com/Philip-Machar"
                className="text-[#333333] border border-[#D9D9D9] outline-none py-3 pl-4 rounded-lg placeholder-[#737373] w-full"
              />
            </div>
          </form>
        </div>
      </div>
      <hr className="-mx-5 my-6 border-[1px]" />
      <div className="flex justify-center items-center">
        <button className="bg-[#633CFF] text-white font-semibold w-full py-3 rounded-lg mb-4 opacity-40">save</button>
      </div>
    </div>
  )
}

export default LinksPage;
