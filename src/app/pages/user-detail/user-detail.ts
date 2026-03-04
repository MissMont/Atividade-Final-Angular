import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, switchMap, map, of } from 'rxjs';
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

  user$!: Observable<User | null>;
  invalidId = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {

    this.user$ = this.route.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(idParam => {

        const id = Number(idParam);

        if (!idParam || isNaN(id)) {
          this.invalidId = true;
          return of(null);
        }

        return this.userService.buscarUsuarioPorId(id);
      })
    );

  }

}