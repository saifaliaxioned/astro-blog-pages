const date = new Date().toLocaleDateString('on-india', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

const blogData = [
  {
    number: 'Blog 1',
    AuthorName: 'andrew auston',
    date: date,
    path: '../blog/blog1',
    image: 'https://media.istockphoto.com/id/1460853332/photo/butterfly-on-a-flower.jpg?b=1&s=170667a&w=0&k=20&c=fdPx7WpytVlSgtO87ct_tuygC_P0xI-DLBeIhP7DvWY=',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    number: 'Blog 2',
    AuthorName: 'neil armstrong',
    date: date,
    path: '../blog/blog2',
    image: 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHNwYWNlfGVufDB8MHwwfHw%3D&w=1000&q=80',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    number: 'Blog 3',
    AuthorName: 'vin diesel',
    date: date,
    path: '../blog/blog3',
    image: 'https://images.unsplash.com/photo-1593427934550-4742b652ac84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGNhcnN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    number: 'Blog 4',
    AuthorName: 'buzz aldrin',
    date: date,
    path: '../blog/blog4',
    image: 'https://media.istockphoto.com/id/1345769023/photo/female-engineer-programming-a-cnc-machine-at-factory.jpg?b=1&s=170667a&w=0&k=20&c=veQrmcWkC9OU2oPo2zgoseyFxoMaJlEqEowwx0E6Be0=',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    number: 'Blog 5',
    AuthorName: 'hans aanrud',
    date: date,
    path: '../blog/blog5',
    image: 'https://media.istockphoto.com/id/184312691/photo/doctor-and-senior-patient-talking-in-hospital-room.jpg?b=1&s=170667a&w=0&k=20&c=8XDkmHW_MsLo0mka8xkjSuQFecqDv7uHmDftGpcbWFM=',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    number: 'Blog 6',
    AuthorName: 'verna aardema',
    date: date,
    path: '../blog/blog6',
    image: 'https://media.istockphoto.com/id/1146554418/photo/retro-blog-bookshelf-with-cozy-interior.jpg?b=1&s=170667a&w=0&k=20&c=4mhG8Ap2Sp3tYiQvjxXqWIMVkjdIpHChMlWIl2LbEx0=',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }
]

export default blogData