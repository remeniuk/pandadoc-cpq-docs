import React from 'react';

const ReleaseNotesList = () => {
  const releaseNotesItems = [
    { label: 'Release Notes - February 2025', href: '/release-notes/february-2025' },
    { label: 'Release Notes - January 2025', href: '/release-notes/january-2025' },
  ];

  return (
    <div>
      <h2>Latest Release Notes</h2>
      <ul>
        {releaseNotesItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReleaseNotesList;
