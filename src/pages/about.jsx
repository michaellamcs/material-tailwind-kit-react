import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  let count = 0;
  let expand = () => {
    let div = document.createElement("div");
    div.innerHTML = `
    <p class="block antialiased font-sans text-blue-gray mb-8 text-xl font-semibold">服務對象</p>
    <p class="block antialiased font-sans text-base leading-relaxed mb-8 font-normal text-blue-gray-500">
        ● 本港居民
        <br/>
        ● 沒有嚴重精神疾病或急性傳染病
        <br/>
        ● 適合群體生活，沒有暴力行為之人士
    </p>
    <p class="block antialiased font-sans text-blue-gray mb-8 text-xl font-semibold">服務內容</p>
    <p class="block antialiased font-sans text-base leading-relaxed mb-8 font-normal text-blue-gray-500">
        ● 膳食服務：包括早餐、午餐、下午茶、晚餐及宵夜等服務
        <br/>
        ● 個人照顧：包括洗衣、剪甲、洗髮、剪髮、餵食、協助沐浴等
        <br/>
        ● 護理服務：包括護理評估、執藥、核派藥、量度生命表徵、協助沐浴、餵飯、換尿片、血糖測試、胰島素注射、洗傷口、鼻胃管護理、尿喉護理等
        <br/>
        ● 復康治療：包括物理治療、職業治療及言語治療等復康運動
        <br/>
        ● 文娛活動：包括節日慶祝、生日會、興趣小組、戶外活動及休閒活動等
    </p>
    <p class="block antialiased font-sans text-blue-gray mb-8 text-xl font-semibold">環境及設施</p>
    <p class="block antialiased font-sans text-base leading-relaxed mb-8 font-normal text-blue-gray-500">
        ● 本院位於大廈內，設有冷暖空氣調節
        <br/>
        ● 院舍提供60個宿位，當中設有單人房及雙人房，另設飯堂及浴室等
        <br/>
        ● 院內備有小客廳及電視供院友休憩
        <br/>
        ● 院內具備血糖機、 電動床、防滑扶手、氧氣機、氣墊床、手攪床、吸痰機、拐杖、輪椅等專業設備
        <br/>
        ● 有需要時，備有專車協助院友外出
    </p>
    <p class="block antialiased font-sans text-blue-gray mb-8 text-xl font-semibold">服務簡介</p>
    <p class="block antialiased font-sans text-base leading-relaxed mb-8 font-normal text-blue-gray-500">
        ● 由醫生、護士、保健員、護理員為院友提供個人日常起居照料及全面護理，如餵食、藥物及換症等
        <br/>
        ● 院舍會為長者安排生日會、休閒及康樂活動
        <br/>
        ● 院舍會按長者的身體狀況，提供復康訓練
    </p>
  `;
    div.className = "mb-3";
    div.id = "expandable";
    document.getElementById("showMore").appendChild(div);
    document.getElementById("showMoreButton").innerHTML = "Show less";
  };
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/team-2.jpg"
                        alt="Profile picture"
                        variant="square"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400">Conntect</Button>
                </div> */}

                {/* <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Photos
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        89
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div>*/}
              </div>

              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  石籬惠安護老院
                </Typography>
                <div className="mb-3 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    <a href="https://goo.gl/maps/3cH1b8A95vnR1RSD6">
                      葵涌大白田街25號安盛大廈1樓A及B室
                    </a>
                  </Typography>
                  </div>

                  <div className="mb-16 flex items-center justify-center gap-2">
                  <PaperAirplaneIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                  巴士 35X, 36X, 31M, 32, 35A, 36B, 43A, 40P 及 小巴 412, 83A , 94, 403X, 403 路線均可抵達本院
                  </Typography>
                </div>


                {/* <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Solution Manager - Creative Tim Officer
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div> */}
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-left">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <div className="w-full">
                      <Typography className="text-blue-gray mb-8 text-xl font-semibold">
                        宗旨
                      </Typography>
                      <Typography className="mb-8 font-normal text-blue-gray-500">
                        本院致力為長者提供優質的院舍服務，助長者滿足生活需要，提升長者生活質素，讓長者有尊嚴地在院舍安享歡愉的晚年。
                      </Typography>
                    </div>

                    <div className="w-full" id="showMore">
                      <Typography className="text-blue-gray mb-8 text-xl font-semibold">
                        目的
                      </Typography>
                      <Typography className="mb-8 font-normal text-blue-gray-500">
                        本院為體弱而缺乏自我照顧能力的長者，提供膳宿、起居日常照顧服務、復康服務及各類社交活動，以照顧院友之生理、心理社群及日常生活需要，務求使長者得到全面優質的照顧，在院舍中安享愉快的晚年生活。
                      </Typography>
                    </div>

                    <Button
                      id="showMoreButton"
                      variant="text"
                      onClick={() => {
                        count = count + 1;
                        if (count % 2 === 0) {
                          document
                            .getElementById("showMore")
                            .removeChild(document.getElementById("expandable"));
                          if (
                            (document.getElementById(
                              "showMoreButton"
                            ).innerHTML = "Show less")
                          ) {
                            document.getElementById(
                              "showMoreButton"
                            ).innerHTML = "Show more";
                          }
                        } else {
                          expand();
                        }
                      }}
                    >
                      Show more
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
