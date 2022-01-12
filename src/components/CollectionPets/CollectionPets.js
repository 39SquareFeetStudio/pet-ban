import classes from "./CollectionPets.module.css";
import demoPet1Img from "../../assets/demoPet1.jpeg";
import demoPet2Img from "../../assets/demoPet2.jpeg";
import demoPet3Img from "../../assets/demoPet3.jpeg";

const CollectionPets = () => {
  return (
    <section className={classes.collection}>
      <ul>
        <li className={classes.control}>
          <a href="/" className={"group"}>
            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
              <div>
                <dt className="sr-only">名字</dt>
                <dd className="group-hover:text-white text-2xl">{"小宇"}</dd>
              </div>
              <div>
                <dt className="sr-only">照片</dt>
                <dd className={""}>
                  <img
                    src={demoPet1Img}
                    className={
                      "rounded-full md:w-1/6 w-7/12 mx-auto border-2 border-white"
                    }
                    alt={"Pet1"}
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">歲</dt>
                <dd className="group-hover:text-white text-base">{"5歲"}</dd>
              </div>
              <div>
                <dt className="sr-only">性別</dt>
                <dd className="group-hover:text-white text-base">{"公"}</dd>
              </div>
            </dl>
          </a>
        </li>
        <li className={classes.control}>
          <a href="/" className={"group"}>
            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
              <div>
                <dt className="sr-only">名字</dt>
                <dd className="group-hover:text-white text-2xl">{"秋哈"}</dd>
              </div>
              <div>
                <dt className="sr-only">照片</dt>
                <dd className={""}>
                  <img
                    src={demoPet2Img}
                    className={
                      "rounded-full md:w-1/6 w-7/12 mx-auto border-2 border-white"
                    }
                    alt={"Pet2"}
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">歲</dt>
                <dd className="group-hover:text-white text-base">{"5歲"}</dd>
              </div>
              <div>
                <dt className="sr-only">性別</dt>
                <dd className="group-hover:text-white text-base">{"公"}</dd>
              </div>
            </dl>
          </a>
        </li>
        <li className={classes.control}>
          <a href="/" className={"group"}>
            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
              <div>
                <dt className="sr-only">名字</dt>
                <dd className="group-hover:text-white text-2xl">{"娜娜"}</dd>
              </div>
              <div>
                <dt className="sr-only">照片</dt>
                <dd className={""}>
                  <img
                    src={demoPet3Img}
                    className={
                      "rounded-full md:w-1/6 w-7/12 mx-auto border-2 border-white"
                    }
                    alt={"Pet2"}
                  />
                </dd>
              </div>
              <div>
                <dt className="sr-only">歲</dt>
                <dd className="group-hover:text-white text-base">{"3歲"}</dd>
              </div>
              <div>
                <dt className="sr-only">性別</dt>
                <dd className="group-hover:text-white text-base">{"母"}</dd>
              </div>
            </dl>
          </a>
        </li>
        <li className={classes.action}>
          <a href={"pet/addPetByChipIdForm"}>
            <svg
              className="group-hover:text-blue-500 mb-1 text-gray-400"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            新增寵愛卡
          </a>
        </li>
      </ul>
    </section>
  );
};

export default CollectionPets;
