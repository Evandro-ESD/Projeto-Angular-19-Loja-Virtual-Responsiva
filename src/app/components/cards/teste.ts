
export class ClassificacaoPresosComponent {
  data = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Jim Beam', age: 35 },
  ];
  columns: any[] = [
    {
      name: 'grupo',
      label: 'Grupo',
      cell: (column: { grupo: any; }) => column.grupo,
    },
    {
      name: 'sistema',
      label: 'Sistema',
      cell: (column: { sistema: any; }) => column.sistema,
    },
    {
      name: 'permissoes',
      label: 'Permissões',
      cell: (column: { permissoes: any; }) => column.permissoes,
    },
    {
      name: 'unidades',
      label: 'Unidades',
      cell: (column: { unidades: any; }) => column.unidades,
    },
    {
      name: 'acoes',
      label: 'Ações',
      type: 'actions',
      actions: [
        {
          type: 'icon',
          icon: 'edit',
          command: (column: { acoes: any; }) => alert(JSON.stringify(column)),
        },
      ],
      cell: (column: { acoes: any; }) => column.acoes,
    },
  ];
}
