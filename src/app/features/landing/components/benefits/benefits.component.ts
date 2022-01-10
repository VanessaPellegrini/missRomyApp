import { Component, OnInit } from '@angular/core';

interface Content {
  icon: string,
  text: string
}

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  content: Content[] = [
    {
      icon: 'auto_stories',
      text: 'Buscamos brindar un sistema educativo en el hogar; diferente e innovador, que responda a los requerimientos escolares de los niños, niñas y adolescentes de hoy, aportando a su desarrollo integral mediante estrategias psicoeducativas que favorezcan su proceso de aprendizaje.'
    },
    {
      icon: 'volunteer_activism', 
      text: 'Trabajamos para promover una educación motivada por las ganas de aprender, focalizada a los desafíos del futuro en el sistema escolar,, donde el estudiante sea el protagonista y que día a día se potencien sus capacidades intelectuales y habilidades socioemocionales, formando alumnos integrales con autonomía, ética, sana autoestima, fortaleciendo un vínculo activo entre las familias y las profesionales en pro de los avances de los niños, niñas adolescentes.'
    },
    {
      icon: 'psychology', 
      text: 'Incentivar un nuevo sentido en la Educación de Chile, donde el estudiante alcance su máximo potencial en el ámbito emocional, social e intelectual, y donde las familias, los docentes y psicólogos sean agentes activos en el proceso de motivación a aprender y descubrir nuevos conocimientos, con modernos y adecuados programas de estudios de fácil acceso para todos(as) los niños, niñas y adolescentes del país.'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
