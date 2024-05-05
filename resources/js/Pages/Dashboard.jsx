import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { FlagIcon } from "@heroicons/react/16/solid";

export default function Dashboard({
  auth,
  totalPendingTasks,
  myPendingTasks,
  totalProgressTasks,
  myProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  activeTasks,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
          <div className=" bg-white dark:bg-gray-800  rounded-[8px] overflow-hidden bg-quaternary border-l-[6px] border-amber-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div className=" p-6 text-gray-900 dark:text-gray-100">
              <h3 className=" text-amber-500 text-2xl font-semibold">
                Pending Tasks
              </h3>
              <h1 className=" text-[20px] leading-[24px] font-bold  mt-[5px]">
                <span className="mr-2">{myPendingTasks}</span>/
                <span className="ml-2">{totalPendingTasks}</span>
              </h1>
            </div>
            <img
              src="/images/pendapatan.png"
              alt="Pendign"
              width={60}
              height={60}
              className="flex justify-between"
            />
          </div>

          <div className=" bg-white dark:bg-gray-800  rounded-[8px] overflow-hidden bg-quaternary border-l-[6px] border-blue-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div className=" p-6 text-gray-900 dark:text-gray-100">
              <h3 className=" text-blue-500 text-2xl font-semibold">
                In progress task
              </h3>
              <h1 className=" text-[20px] leading-[24px] font-bold  mt-[5px]">
                <span className="mr-2">{myProgressTasks}</span>/
                <span className="ml-2">{totalProgressTasks}</span>
              </h1>
            </div>
            <img
              src="/images/transaction.png"
              alt="progress"
              width={60}
              height={60}
              className="flex justify-between"
            />
          </div>

          <div className=" bg-white dark:bg-gray-800  rounded-[8px] overflow-hidden bg-quaternary border-l-[6px] border-green-500 flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div className=" p-6 text-gray-900 dark:text-gray-100">
              <h3 className=" text-green-500 text-2xl font-semibold">
                Completed Task
              </h3>
              <h1 className=" text-[20px] leading-[24px] font-bold  mt-[5px]">
                <span className="mr-2">{myCompletedTasks}</span>/
                <span className="ml-2">{totalCompletedTasks}</span>
              </h1>
            </div>
            <img
              src="/images/status.png"
              alt="completed tasks"
              width={60}
              height={60}
              className="flex justify-between"
            />
          </div>
        </div>
        {/* pembatas */}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 text-xl dark:text-gray-100">
              <h3>My Active Tasks</h3>
              <table className="mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr>
                    <th className="px-3 py-3">ID</th>
                    <th className="px-3 py-3">Project Name</th>
                    <th className="px-3 py-3">Name</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTasks.data.map((task) => (
                    <tr key={task.id}>
                      <td className=" px-3 py-2">{task.id}</td>
                      <td className="px-3 py-2 text-white hover:underline">
                        <Link href={route("project.show", task.project.id)}>
                          {task.project.name}
                        </Link>
                      </td>
                      <td className=" px-3 py-2 text-white hover:underline">
                        <Link href={route("task.show", task.id)}>
                          {task.name}
                        </Link>
                      </td>
                      <td className=" px-3 py-2">
                        <span
                          className={
                            "px-2 py-1 rounded text-nowrap text-white " +
                            TASK_STATUS_CLASS_MAP[task.status]
                          }
                        >
                          {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                      </td>
                      <td className=" px-3 py-2 text-nowrap">
                        {task.due_date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
