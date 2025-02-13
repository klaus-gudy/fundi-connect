import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden" >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8eef3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e161b]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0e161b] text-lg font-bold leading-tight tracking-[-0.015em]">Fundi Connect</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0e161b] text-sm font-medium leading-normal" href="#">Services</a>
              <a className="text-[#0e161b] text-sm font-medium leading-normal" href="#">Artisans</a>
              <a className="text-[#0e161b] text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-[#0e161b] text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <div className="flex gap-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1d8cd7] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Become an Artisan</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e8eef3] text-[#0e161b] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign In</span>
              </button>
              <button
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e8eef3] text-[#0e161b] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
              >
                <div className="text-[#0e161b]" data-icon="Globe" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c0cb71c6-6fbc-4e61-b454-8c51ca94d6fb.png")' }}
                >
                  <h1
                    className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] text-center"
                  >
                    Discover Tanzania's top artisans and services
                  </h1>
                  <label className="flex flex-col min-w-40 h-14 w-full max-w-[480px] @[480px]:h-16">
                    <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                      <div
                        className="text-[#507a95] flex border border-[#d1dde6] bg-[#f8fafb] items-center justify-center pl-[15px] rounded-l-xl border-r-0"
                        data-icon="MagnifyingGlass"
                        data-size="20px"
                        data-weight="regular"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        placeholder="What are you looking for?"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e161b] focus:outline-0 focus:ring-0 border border-[#d1dde6] bg-[#f8fafb] focus:border-[#d1dde6] h-full placeholder:text-[#507a95] px-[15px] rounded-r-none border-r-0 pr-2 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                        value=""
                      />
                      <div className="flex items-center justify-center rounded-r-xl border-l-0 border border-[#d1dde6] bg-[#f8fafb] pr-[7px]">
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1d8cd7] text-[#f8fafb] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                        >
                          <span className="truncate">Search</span>
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <h2 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Popular Services</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/16fe8e04-8db6-4b6d-b3f3-abea035dfefe.png")' }}
                ></div>
                <p className="text-[#0e161b] text-base font-medium leading-normal">Cleaning</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/859f200e-036e-4885-8ee7-c854b6b58f8a.png")' }}
                ></div>
                <p className="text-[#0e161b] text-base font-medium leading-normal">Plumbing</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/42711b84-4aac-4d66-a1e3-66631f4c72aa.png")' }}
                ></div>
                <p className="text-[#0e161b] text-base font-medium leading-normal">Electrical</p>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/2892c095-bd0e-46bf-ac56-38d60d8f9c73.png")' }}
                ></div>
                <p className="text-[#0e161b] text-base font-medium leading-normal">Painting</p>
              </div>
            </div>
            <h2 className="text-[#0e161b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Artisans</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/aa531d67-687b-41b9-8398-3ff23dc2c8e6.png")' }}
                ></div>
                <div>
                  <p className="text-[#0e161b] text-base font-medium leading-normal">Mama Mwinyi</p>
                  <p className="text-[#507a95] text-sm font-normal leading-normal">Pottery</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/81a94fd9-0e12-4821-b1a5-964f0d76b152.png")' }}
                ></div>
                <div>
                  <p className="text-[#0e161b] text-base font-medium leading-normal">Mzee Nguvu</p>
                  <p className="text-[#507a95] text-sm font-normal leading-normal">Woodworking</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/ed85bb1e-99f0-4df1-845f-15964593040f.png")' }}
                ></div>
                <div>
                  <p className="text-[#0e161b] text-base font-medium leading-normal">Ndugu Wema</p>
                  <p className="text-[#507a95] text-sm font-normal leading-normal">Metalwork</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/3626b78e-a788-4130-bc1b-3e9e616c939f.png")' }}
                ></div>
                <div>
                  <p className="text-[#0e161b] text-base font-medium leading-normal">Dada Mwema</p>
                  <p className="text-[#507a95] text-sm font-normal leading-normal">Weaving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
