import { Archive, ArrowDownToLine, Globe, Home, Plus, Search } from "lucide-react";

function App() {
    return (
        <div className="page">
            <header className="w-full h-15 flex items-center justify-between px-1">
                <div className="w-1/2 flex items-center gap-6">
                    <img src="src/assets/spotify.svg" alt="" className="w-9 h-9" />
                    <div className="flex flex-1 items-center gap-2">
                        <button className="p-2 bg-neutral-500/25 rounded-full">
                            <Home size={20} className="text-white" />
                        </button>
                        <div className="flex flex-1 items-center gap-2 py-2 px-3 rounded-2xl bg-neutral-500/25">
                            <Search size={20} className="text-neutral-500" />
                            <input type="text" placeholder="어떤 콘텐츠를 감상하고 싶으세요?" className="flex-1 text-white text-sm placeholder:text-sm focus:outline-none" />
                            <div className="w-[1px] h-4 mx-1 bg-neutral-500"></div>
                            <Archive size={20} className="text-neutral-500" />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-end gap-6">
                    <div className="flex items-center gap-6">
                        <a href="" className="flex items-center">
                            <span className="text-neutral-500 text-sm">Premium</span>
                        </a>
                        <a href="">
                            <span className="text-neutral-500 text-sm">지원</span>
                        </a>
                        <a href="">
                            <span className="text-neutral-500 text-sm">다운로드</span>
                        </a>
                    </div>
                    <div className="w-[1px] h-4 bg-neutral-500"></div>
                    <div className="flex items-center gap-6">
                        <a href="" className="flex items-center gap-1">
                            <ArrowDownToLine size={16} className="text-neutral-500" />
                            <span className="text-neutral-500 text-sm">앱 설치하기</span>
                        </a>
                        <a href="">
                            <span className="text-neutral-500 text-sm">가입하기</span>
                        </a>
                    </div>
                    <button className="py-2 px-6 text-sm font-semibold bg-white rounded-2xl cursor-pointer">로그인 하기</button>
                </div>
            </header>
            <main className="w-full h-full flex items-center gap-3">
                <div className="w-[30%] h-full flex flex-col p-4 gap-6 bg-neutral-500/25 rounded-lg">
                    <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">내 라이브러리</span>
                        <button className="flex items-center justify-center">
                            <Plus className="text-neutral-500" />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="w-full flex flex-col p-4 gap-6 bg-neutral-500/10 rounded-2xl">
                            <div className="w-full flex flex-col gap-1">
                                <span className="font-semibold text-white">첫 번째 플레이리스트를 만드세요.</span>
                                <span className="text-neutral-400">어렵지 않아요. 저희가 도와드릴게요.</span>
                            </div>
                            <button className="w-fit bg-white py-2 px-4 rounded-2xl text-sm font-bold">플레이리스트 만들기</button>
                        </div>
                        <div className="w-full flex flex-col p-4 gap-6 bg-neutral-500/10 rounded-2xl">
                            <div className="w-full flex flex-col gap-1">
                                <span className="font-semibold text-white">첫 번째 플레이리스트를 만드세요.</span>
                                <span className="text-neutral-400">어렵지 않아요. 저희가 도와드릴게요.</span>
                            </div>
                            <button className="w-fit bg-white py-2 px-4 rounded-2xl text-sm font-bold">플레이리스트 만들기</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-12">
                        <div className="flex items-center gap-4">
                            <a href="" className="text-neutral-500 text-sm">
                                법률 정보
                            </a>
                            <a href="" className="text-neutral-500 text-sm">
                                안전 및 개인정보 보호센터
                            </a>
                            <a href="" className="text-neutral-500 text-sm">
                                개인정보 처리방침
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="" className="text-neutral-500 text-sm">
                                광고 상세정보
                            </a>
                            <a href="" className="text-neutral-500 text-sm">
                                접근성
                            </a>
                        </div>
                        <a href="" className="text-white text-sm">
                            쿠키
                        </a>
                    </div>
                    <div className="w-fit flex items-center gap-2 py-1 px-3 border border-white rounded-2xl">
                        <Globe size={20} className="text-white" />
                        <span className="text-white">한국어</span>
                    </div>
                </div>
                <div className="w-[70%] h-full bg-amber-400"></div>
            </main>
        </div>
    );
}

export default App;
