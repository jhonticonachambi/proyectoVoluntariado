import React from 'react';

const PostulationsTable = () => {
  const postulations = [
    { project: 'Ayuda Comunitaria', status: 'Aceptado' },
    { project: 'Reforestación', status: 'Pendiente' }
  ];

  return (
    <div>
      <h2>Tus Postulaciones Recientes</h2>
      <table>
        <tbody>
          {postulations.map((p, index) => (
            <tr key={index}>
              <td>Proyecto: {p.project}</td>
              <td>Estado: {p.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostulationsTable;
