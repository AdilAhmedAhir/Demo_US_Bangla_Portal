export default function Home() {
  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <div className="mb-4">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="mt-2 flex items-baseline gap-2 text-sm text-gray-500">
          Welcome back to the portal. Here is what is happening with your studies today.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { name: 'Current GPA', stat: '3.85', change: '+0.15' },
          { name: 'Total Credits', stat: '86', change: '+12' },
          { name: 'Upcoming Exams', stat: '3', change: 'This week' },
          { name: 'Unread Messages', stat: '12', change: 'From faculty' },
        ].map((item) => (
          <div key={item.name} className="overflow-hidden rounded-2xl bg-white px-4 py-5 shadow-sm border border-gray-100 sm:p-6 group hover:shadow-md transition-all">
            <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
            <dd className="mt-2 flex items-baseline gap-x-2">
              <span className="text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</span>
              <span className="text-sm font-medium text-brand-primary-green">{item.change}</span>
            </dd>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 rounded-2xl bg-white shadow-sm border border-gray-100 min-h-[400px] p-6 flex flex-col group hover:shadow-md transition-all">
          <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-4">Recent Activity</h2>
          <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50/50">
            <p className="text-sm text-gray-500">Activity chart will appear here</p>
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow-sm border border-gray-100 min-h-[400px] p-6 flex flex-col group hover:shadow-md transition-all">
           <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-4">Announcements</h2>
           <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center bg-gray-50/50">
            <p className="text-sm text-gray-500">Announcements feed here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
