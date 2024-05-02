import { Button } from "@/components/ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { DiscordLogoIcon, GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Landing() {
    return (
        <div className="w-screen bg-black h-screen border-8 border-white">
            <ResizablePanelGroup direction="horizontal">
                <Panel img="https://littlevisuals.co/images/a_mile.jpg" url="/about">
                    <p className="text-8xl text-white font-bold italic">Who am I?</p>
                </Panel>

                <ResizableHandle className="bg-white p-1" />

                <ResizablePanel>
                    <ResizablePanelGroup direction="vertical">
                        <Panel img="https://littlevisuals.co/images/747.jpg" url="/research">
                            <p className="text-7xl text-white font-bold">Projects</p>
                            <p className="text-7xl text-white font-bold mt-5 mb-1">&#38;</p>
                            <p className="text-7xl text-white font-bold">Publications</p>
                        </Panel>

                        <ResizableHandle className="bg-white p-1" />

                        <ResizablePanel>
                            <ResizablePanelGroup direction="horizontal">
                                <Panel img="https://littlevisuals.co/images/boat.jpg" url="/hobby">
                                    <p className="text-6xl text-white font-bold">Hobbies</p>
                                </Panel>

                                <ResizableHandle className="bg-white p-1" />

                                <ResizablePanel>
                                    <ResizablePanelGroup direction="vertical">
                                        <ResizablePanel className="transition duration-200 opacity-50 hover:opacity-100 bg-white">
                                            <a href="https://algorix.io" className="flex w-full h-full items-center justify-center">
                                                <p className="text-black text-5xl font-bold mr-2">algorix</p>
                                                <p className="text-black text-5xl">corporation</p>
                                            </a>
                                        </ResizablePanel>

                                        <ResizableHandle className="bg-white p-1" />

                                        <ResizablePanel className="flex items-center justify-center flex-col">
                                            <a className="text-8xl text-white font-black mb-4" href="mailto:henryk@algorix.io">G2G3</a>

                                            <div className="flex">
                                                <Button size="icon" variant="outline" className="mx-2 rounded-full">
                                                    <a href="https://www.linkedin.com/in/taeksoo-kwon">
                                                        <LinkedInLogoIcon className="h-6 w-6" color="black" />
                                                    </a>
                                                </Button>

                                                <Button size="icon" variant="outline" className="mx-2 rounded-full">
                                                    <a href="https://github.com/YTG2G3">
                                                        <GitHubLogoIcon className="h-6 w-6" color="black" />
                                                    </a>
                                                </Button>

                                                <Button size="icon" variant="outline" className="mx-2 rounded-full">
                                                    <a href="https://discord.com/invite/Qrspk6GqwJ">
                                                        <DiscordLogoIcon className="h-6 w-6" color="black" />
                                                    </a>
                                                </Button>

                                                <Button size="icon" variant="outline" className="mx-2 rounded-full">
                                                    <a href="https://www.instagram.com/ytg2g3/">
                                                        <InstagramLogoIcon className="h-6 w-6" color="black" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </ResizablePanel>
                                    </ResizablePanelGroup>
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

function Panel({ img, url, children }: { img: string, url: string, children: React.ReactNode }) {
    return (
        <ResizablePanel className="relative transition duration-200 opacity-50 hover:opacity-100">
            <a href={url}>
                <img className="object-cover w-full h-full" src={img} alt="img" />

                <div className="absolute left-0 top-0 flex w-full h-full items-center justify-center z-20 flex-col">
                    {children}
                </div>
            </a>
        </ResizablePanel>
    );
}