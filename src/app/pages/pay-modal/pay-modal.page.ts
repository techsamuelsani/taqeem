import { Component, Input, Injector, OnInit } from '@angular/core';
import { BasePage } from '../base-page/base-page';
import { StripeService, ElementOptions, ElementsOptions } from "@nomadreservations/ngx-stripe";
import { PaymentIntentResult, PaymentIntent } from '@nomadreservations/ngx-stripe/lib/interfaces/token';
import { UserPackage } from 'src/app/services/user-package';
import { Place } from 'src/app/services/place-service';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.page.html',
  styleUrls: ['./pay-modal.page.scss'],
})
export class PayModalPage extends BasePage implements OnInit {

  @Input() userPackage: UserPackage;
  @Input() place: Place;

  public isSaving: boolean;

  public stripeElement: any;

  public cardOptions: ElementOptions = {};

  public elementsOptions: ElementsOptions = {};

  constructor(injector: Injector, private stripeService: StripeService) {
    super(injector);
    this.elementsOptions.locale = this.preference.lang;
  }

  enableMenuSwipe(): boolean {
    return false;
  }

  ngOnInit() {}

  onCardUpdated(result: any) {
    this.stripeElement = result.element;
  }

  onDismiss(paymentIntent: PaymentIntent = null) {
    return this.modalCtrl.dismiss(paymentIntent);
  }

  async onSubmit() {

    try {

      this.isSaving = true;

      const secret = await this.userPackage.createStripePaymentIntent(this.place.id);

      this.stripeService.handleCardPayment(secret, this.stripeElement)
      .subscribe((result: PaymentIntentResult) => {
        
        if (result.error) {
          this.showAlert(result.error.message);
        } else {
          this.onDismiss(result.paymentIntent);
        }

        this.isSaving = false;
      });

    } catch (error) {
      this.isSaving = false;
      this.translate.get('ERROR_NETWORK')
        .subscribe(str => this.showToast(str));
    }

  }

}
