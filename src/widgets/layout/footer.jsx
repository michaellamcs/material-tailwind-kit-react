import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, phone, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full mx-auto px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="mb-4 font-normal text-blue-gray-500">
              {description}
            </Typography>
            <Typography className="font-normal text-black">
              {phone}
            </Typography>

            {/* <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div> */}

          </div>
          <div className="mx-auto mt-12 w-max gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "石籬惠安護老院",
  description:
    "牌照事務處檔案號碼: L1247",
    phone: "電話：2155 3091",
  // socials: [
  //   {
  //     color: "blue",
  //     name: "facebook",
  //     path: "https://www.facebook.com/CreativeTim",
  //   },
  //   {
  //     color: "light-blue",
  //     name: "twitter",
  //     path: "https://www.twitter.com/creativetim",
  //   },
  //   {
  //     color: "purple",
  //     name: "instagram",
  //     path: "https://www.instagram.com/creativetimofficial/",
  //   },
  //   {
  //     color: "pink",
  //     name: "dribbble",
  //     path: "https://www.dribbble.com/creativetim",
  //   },
  //   {
  //     color: "red",
  //     name: "youtube",
  //     path: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
  //   },
  //   {
  //     color: "black",
  //     name: "github",
  //     path: "https://github.com/creativetimofficial/material-tailwind",
  //   },
  // ],
  menus: [
    {
      name: "相關連結",
      items: [
        { name: "關於我們", path: "http://localhost:5173/profile" },
        { name: "社會褔利署署", path: "https://www.swd.gov.hk/tc/index/site_pubsvc/page_elderly/" },
        {
          name: "香港老年學會",
          path: "https://www.hkag.org/",
        },
      ],
    },
    // {
    //   name: "other resources",
    //   items: [
    //     {
    //       name: "MIT License",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
    //     },
    //     {
    //       name: "Contribute",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
    //     },
    //     {
    //       name: "Change Log",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
    //     },
    //     {
    //       name: "Contact Us",
    //       path: "https://creative-tim.com/contact-us?ref=mtk",
    //     },
    //   ],
    // },
  ],
  copyright: (
    <>
      Copyright © {year} 石籬惠安護老院
      {/* <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        Creative Tim
      </a> */}
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  phone: PropTypes.string,
  // socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
