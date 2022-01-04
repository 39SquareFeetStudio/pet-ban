import classes from "./CollectionPets.module.css";
const CollectionPets = () => {
  return (
    <section className={classes.collection}>
      <ul>
        <li className={classes.control}>
          <a href="/" className={"group"}>
            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
              <div>
                <dt className="sr-only">Title</dt>
                <dd className="group-hover:text-white text-gray-900">
                  {"project.title"}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Category</dt>
                <dd className="group-hover:text-blue-200 text-gray-500">
                  {"project.category"}
                </dd>
              </div>
            </dl>
          </a>
        </li>
        <li className={classes.control}>
          <a href="/" className={"group"}>
            <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
              <div>
                <dt className="sr-only">Title</dt>
                <dd className="group-hover:text-white text-gray-900">
                  {"project.title"}
                </dd>
              </div>
              <div>
                <dt className="sr-only">Category</dt>
                <dd className="group-hover:text-blue-200 text-gray-500">
                  {"project.category"}
                </dd>
              </div>
            </dl>
          </a>
        </li>
        <li className={classes.action}>
          <a href="/">
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
