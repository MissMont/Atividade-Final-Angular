import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../services/user';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-detail.html',
  styleUrls: ['./user-detail.css']
})
export class UserDetail implements OnInit {

  user!: User | null;
  carregando = true;
  erro = false;
  naoEncontrado = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {

      const idParam = params.get('id');
      const id = Number(idParam);


      if (!idParam || isNaN(id)) {
        this.erro = true;
        this.carregando = false;
        this.cdr.detectChanges();
        return;
      }

      this.userService.buscarUsuarioPorId(id).subscribe({
        next: (dados) => {

          if (!dados) {
            this.naoEncontrado = true;
          } else {
            this.user = dados;
          }

          this.carregando = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.erro = true;
          this.carregando = false;
          this.cdr.detectChanges();
        }
      });

    });

  }
}