

function Create() {
  const createPostSubmitHandler = (e) => {
    e.preventDefault();

    const postData = Object.fromEntries(new FormData(e.currentTarget))

    console.log(postData);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-black bg-opacity-90 ">
      <form className="w-1/2 dark:bg-gray-800 p-8 rounded-lg" onSubmit={createPostSubmitHandler}>
        <h1 className="text-center text-3xl font-bold text-white pb-8">
          Add review
        </h1>
        <div className="mb-6">
          <label
            htmlFor="movie"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Movie Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="year"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Year of Movie:
          </label>
          <input
            type="text"
            id="year"
            name="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="genre"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Genre:
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="imageUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image Url:
          </label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="review"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Review:
          </label>
          <textarea
            type="text"
            id="review"
            name="review"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            required=""
          />
        </div>
        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          Add Review
        </button>
      </form>
    </div>
  );
}

export default Create;
