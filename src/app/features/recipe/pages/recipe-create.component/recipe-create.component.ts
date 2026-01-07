import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RecipeService} from '../../services/recipe.service';
import {takeUntil} from 'rxjs';
import {BaseComponent} from '../../../../core/components/base.component/base.component';
import {FloatLabel} from 'primeng/floatlabel';
import {InputText} from 'primeng/inputtext';
import {Textarea} from 'primeng/textarea';
import {InputNumber} from 'primeng/inputnumber';
import {Button} from 'primeng/button';

@Component({
  selector: 'app-recipe-create.component',
  imports: [
    ReactiveFormsModule,
    FloatLabel,
    InputText,
    Textarea,
    InputNumber,
    Button
  ],
  templateUrl: './recipe-create.component.html',
  styleUrl: './recipe-create.component.scss',
})
export class RecipeCreateComponent extends BaseComponent {

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);
  private readonly _recipeService: RecipeService = inject(RecipeService);

  loading: boolean = false;

  recipeForm = this._fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    steps: ['', [Validators.required]],
    composition: ['', [Validators.required]],
    servingSize: [1, [Validators.required, Validators.min(1)]],
  });

  submit(): void {

    this.loading = true;

    this.recipeForm.markAllAsTouched();

    if(this.recipeForm.invalid) {
      return;
    }

    this._recipeService.postRecipe(this.recipeForm.value as any)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.loading = false;
        this._router.navigate(['/']);
    });
  }
}
