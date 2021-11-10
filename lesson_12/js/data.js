

const info0 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const info2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae '
const info3 = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sin'
const info4 = 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis '
const info1 = 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis '

const categories = [
    new Categories('Computers', [
        new Products('iMack Pro 2', 2800, info1),
        new Products('Xiaomi 23 LA', 1500, info2),
        new Products('lenovo 12/re', 1800, info4)
    ]),
    new Categories('Audio System', [
        new Products('MicroLab 80l', 120, info3),
        new Products('XIO 13-2', 200, info2),
    ]),
    new Categories('Console', [
        new Products('Sony V12', 700, info4),
        new Products('Panasonic 12-w', 670, info0),
    ]),
    new Categories('Drum Set', [
        new Products('Yamaha 23ju', 340, info4),
        new Products('Yamaha 12-w', 670, info0),
    ]),
];


