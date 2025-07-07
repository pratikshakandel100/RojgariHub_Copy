import React, { useState } from 'react';

export default function ViewDetails() {
  const job = {
    company: 'TESTA',
    title: 'Web & Gameplay Testing – iPhone + Windows Desktop (Kathmandu)',
    location: 'Nepal',
    postedAgo: '6 days ago',
    salary: '$3,600/yr - $4,320/yr',
    type: ['Remote', 'Part-time'],
    description: `Testa is a full-service crowdtesting provider built specifically for the iGaming industry. Our global team of quality testers helps iGaming businesses improve quality and gain valuable insights from real people on the ground. We know the unique challenges gaming companies face and are the key partners to help them deliver top gaming experiences.`,
  };

  // Comments state
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  // Handle comment submit
  function handleAddComment() {
    if (commentText.trim() === '') return;
    setComments([...comments, commentText.trim()]);
    setCommentText('');
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Job Header */}
      <div className="bg-white rounded-lg shadow border p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-blue-600">{job.company}</h1>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {job.location} · {job.postedAgo} · Over 100 people clicked apply
            </p>
          </div>
          <div className="text-2xl text-gray-300">⋮</div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full">
            {job.salary}
          </span>
          {job.type.map((t, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-sm text-gray-800 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition">
            Apply
          </button>
          <button className="border border-blue-600 text-blue-600 font-medium px-5 py-2 rounded-md hover:bg-blue-50 transition">
            Save
          </button>
        </div>
      </div>

      {/* About the Job */}
      <div className="bg-white rounded-lg shadow border p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">About the job</h3>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
        <button className="text-blue-600 hover:underline mt-3 text-sm">See more</button>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-lg shadow border p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Comments</h3>
        <div className="space-y-3">
          {/* Comment input */}
          <textarea
            className="w-full border rounded-md p-3 resize-none focus:outline-blue-500"
            rows={3}
            placeholder="Add a comment..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md transition"
          >
            Submit
          </button>

          {/* List of comments */}
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((c, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-md p-3 bg-gray-50"
              >
                {c}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


