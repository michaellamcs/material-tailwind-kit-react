import { Avatar, Typography, Button } from "@material-tailwind/react";
import { MapPinIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Environment() {
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
                    巴士 35X, 36X, 31M, 32, 35A, 36B, 43A, 40P 及 小巴 412, 83A
                    , 94, 403X, 403 路線均可抵達本院
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

              <div className="field-content flex flex-wrap flex-col justify-center items-center">
                <div className="max-w-md h-auto m-5">
                <a
                  href="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/rch/image/L1247_B006_02.jpg"
                  title="房間"
                  className="fancybox"
                  data-fancybox-group="gallery-post-10039-field-62"
                >
                  <img
                    typeof="foaf:Image"
                    src="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/styles/1000width/public/rch/image/L1247_B006_02.jpg?itok=Hw0Lk-Q8"
                    className="max-w-full h-auto"
                    alt="房間"
                    title=""
                  />
                </a>
                </div>
                
                <div className="max-w-md h-auto m-5">
                <a
                  href="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/rch/image/L1247_B006_03.jpg"
                  title="房間"
                  className="fancybox"
                  data-fancybox-group="gallery-post-10039-field-62"
                >
                  <img
                    typeof="foaf:Image"
                    src="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/styles/1000width/public/rch/image/L1247_B006_03.jpg?itok=HRuo03CF"
                    className="max-w-full h-auto"
                    alt="房間"
                    title=""
                  />
                </a>
                </div>
                
                <div className="max-w-md h-auto m-5">
                  <a
                  href="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/rch/image/L1247_B006_04.jpg"
                  title="房間"
                  className="fancybox"
                  data-fancybox-group="gallery-post-10039-field-62"
                >
                  <img
                    typeof="foaf:Image"
                    src="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/styles/1000width/public/rch/image/L1247_B006_04.jpg?itok=sqeNxizD"
                    className="max-w-full h-auto"
                    alt="房間"
                    title=""
                  />
                </a>
                </div>
                
                <div className="max-w-md h-auto m-5">
                  <a
                  href="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/rch/image/L1247_B001_05.jpg"
                  title="活動區／客廳／飯廳"
                  className="fancybox"
                  data-fancybox-group="gallery-post-10039-field-62"
                >
                  <img
                    typeof="foaf:Image"
                    src="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/styles/1000width/public/rch/image/L1247_B001_05.jpg?itok=fuO76bu9"
                    className="max-w-full h-auto"
                    alt="活動區／客廳／飯廳"
                    title=""
                  />
                </a>
                </div>
                
                <div className="max-w-md h-auto m-5">
                  <a
                  href="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/rch/image/L1247_B012_06.jpg"
                  title="其他設施"
                  className="fancybox"
                  data-fancybox-group="gallery-post-10039-field-62"
                >
                  <img
                    typeof="foaf:Image"
                    src="https://www.elderlyinfo.swd.gov.hk/sites/ltc-swd/files/styles/1000width/public/rch/image/L1247_B012_06.jpg?itok=CxodrUbK"
                    className="max-w-full h-auto"
                    alt="其他設施"
                    title=""
                  />
                </a>
                </div>
                
              </div>
              <div />
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

export default Environment;
