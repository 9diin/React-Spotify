import { Archive, ArrowDownToLine, Globe, Home, Plus, Search } from "lucide-react";
import { Skeleton } from "./components/ui/skeleton";

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
            <main className="w-full h-[calc(100%-144px)] flex items-center gap-3">
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
                    <div className="flex flex-col gap-4">
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
                <div className="flex flex-col w-[70%] h-full p-6 gap-12 bg-neutral-500/25 rounded-lg overflow-y-scroll">
                    {/* 인기 상승 곡 */}
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex items-end justify-between">
                            <h2 className="text-2xl font-bold text-white">인기 상승 곡</h2>
                            <button className="text-neutral-500">모두 표시</button>
                        </div>
                        <div className="w-full flex items-center gap-4 overflow-x-scroll">
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-32 h-3" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-32 h-3" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-32 h-3" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-32 h-3" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-32 h-3" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-32 h-3" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <div className="flex flex-col gap-2">
                                        <Skeleton className="w-32 h-3" />
                                        <Skeleton className="w-24 h-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 인기 아티스트 */}
                    <div className="w-full flex flex-col gap-2">
                        <div className="w-full flex items-end justify-between">
                            <h2 className="text-2xl font-bold text-white">인기 아티스트</h2>
                            <button className="text-neutral-500">모두 표시</button>
                        </div>
                        <div className="w-full flex items-center gap-4 overflow-x-scroll">
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40 rounded-full" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <Skeleton className="w-32 h-3" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40 rounded-full" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <Skeleton className="w-32 h-3" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40 rounded-full" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <Skeleton className="w-32 h-3" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40 rounded-full" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <Skeleton className="w-32 h-3" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40 rounded-full" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <Skeleton className="w-32 h-3" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Skeleton className="w-40 h-40 rounded-full" />
                                <div className="flex flex-col gap-3">
                                    <Skeleton className="w-40 h-4" />
                                    <Skeleton className="w-32 h-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-500">
                <div className="flex flex-col gap-1">
                    <span className="text-white">Spotify 미리 듣기</span>
                    <span className="text-white">가끔 표시되는 광고와 함께 무제한 곡 및 팟케스트를 이용하려면 가입하세요. 신용카드는 필요 없습니다.</span>
                </div>
                <button className="bg-white px-8 py-3 rounded-3xl font-semibold">무료로 가입하기</button>
            </footer>
        </div>
    );
}

export default App;
